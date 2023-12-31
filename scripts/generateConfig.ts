import { readFile, writeFile } from "node:fs/promises"

import * as prettier from "prettier"
import {
  FetchingJSONSchemaStore,
  InputData,
  JSONSchemaInput,
  quicktype,
} from "quicktype-core"

const SCHEMA_PATH =
  "node_modules/markdownlint/schema/markdownlint-config-schema.json"
const OUTPUT_PATH = "src/generated/config.ts"

async function main() {
  const schemaText = await readFile(SCHEMA_PATH, { encoding: "utf-8" })
  const schema = JSON.parse(schemaText)

  // This is needed, otherwise the ts interface would be invalid
  schema.additionalProperties = true
  await generateJSDocDescriptions(schema)

  const text = await quicktypeJSONSchema(JSON.stringify(schema))
  const textWithEslintIgnoreComment = addEslintIgnoreComment(text)
  const formattedText = await format(textWithEslintIgnoreComment)

  await writeFile(OUTPUT_PATH, formattedText)
}

async function generateJSDocDescriptions({ properties }: any) {
  const descriptionPerAliases: Record<string, string> = {}
  const isAlias = (name: string) => {
    return Object.keys(descriptionPerAliases).includes(name)
  }

  for (const [name, property] of Object.entries<any>(properties)) {
    if (isRuleDefinition(name)) {
      const { ruleJSDoc, aliases } = await generateRuleJSDoc(
        name,
        property.description,
      )

      for (const { name, jsdoc } of aliases) {
        descriptionPerAliases[name] = jsdoc
      }

      property.description = ruleJSDoc
    } else if (isGroupDefinition(property)) {
      property.description = generateGroupJSDoc(name, property.description)
    }
  }

  for (const [name, property] of Object.entries<any>(properties)) {
    if (isAlias(name)) {
      property.description = descriptionPerAliases[name]
    }
  }
}

function isRuleDefinition(ruleName: string) {
  return ruleName.startsWith("MD")
}

async function generateRuleJSDoc(name: string, description: string) {
  const [names, title] = description.split(" - ")
  const [_, ...aliases] = names.split("/")
  const aliasesAsText = aliases.map((alias) => `\`${alias}\``).join(", ")

  const url = getDocsUrlForRule(name)
  const isDeprecated = await isDeprecatedRule(name)
  const deprecationNotice = isDeprecated ? "\n@deprecated" : ""

  const ruleJSDoc = `${title}.\n\nAliases: ${aliasesAsText}\n\n@see ${url}${deprecationNotice}`
  const aliasesWithJSDoc = aliases.map((alias) => ({
    name: alias,
    jsdoc: `@see ${url}${deprecationNotice}`,
  }))

  return {
    ruleJSDoc,
    aliases: aliasesWithJSDoc,
  }
}

async function isDeprecatedRule(name: string) {
  const lowercasedName = name.toLowerCase()
  const pathToDocsOnDisk = `node_modules/markdownlint/doc/${lowercasedName}.md`
  const docsContent = await readFile(pathToDocsOnDisk, { encoding: "utf8" })
  return docsContent.includes("> This rule is deprecated")
}

function isGroupDefinition({ description }: any) {
  return description?.includes(" - MD")
}

function generateGroupJSDoc(name: string, description: string) {
  const [_, rulesComaSeparated] = description.split(" - ")
  const rules = rulesComaSeparated.split(", ")
  const ruleLinks = rules.map((ruleName) => getDocsUrlForRule(ruleName))
  const rulesLinksComaSeparated = ruleLinks.join(", ")
  return `${name} - ${rulesLinksComaSeparated}`
}

function getDocsUrlForRule(name: string) {
  const lowercasedName = name.toLowerCase()
  const documentationUrl = `https://github.com/DavidAnson/markdownlint/blob/main/doc/${lowercasedName}.md`
  return `[${name}](${documentationUrl})`
}

async function quicktypeJSONSchema(jsonSchemaString: string) {
  const schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore())
  await schemaInput.addSource({ name: "Config", schema: jsonSchemaString })

  const inputData = new InputData()
  inputData.addInput(schemaInput)

  const { lines } = await quicktype({
    inputData,
    lang: "ts",
    indentation: "  ",
    rendererOptions: {
      "just-types": true,
      "prefer-unions": true,
    },
  })
  return lines.join("\n")
}

function addEslintIgnoreComment(text: string) {
  return `/* eslint-disable */\n${text}`
}

async function format(text: string) {
  const options = await prettier.resolveConfig(OUTPUT_PATH)
  return await prettier.format(text, {
    ...options,
    filepath: OUTPUT_PATH,
  })
}

main()
