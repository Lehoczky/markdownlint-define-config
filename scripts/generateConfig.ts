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
  generateJSDocDescriptions(schema)

  const text = await quicktypeJSONSchema(JSON.stringify(schema))
  const textWithEslintIgnoreComment = addEslintIgnoreComment(text)
  const formattedText = await format(textWithEslintIgnoreComment)

  await writeFile(OUTPUT_PATH, formattedText)
}

function generateJSDocDescriptions({ properties }: any) {
  for (const [name, property] of Object.entries<any>(properties)) {
    if (isRuleDefinition(name)) {
      property.description = generateRuleDescription(name, property.description)
    }
  }
}

function generateRuleDescription(name: string, schemaDescription: string) {
  const [names, title] = schemaDescription.split(" - ")
  const [_, ...aliases] = names.split("/")
  const aliasesAsText = aliases.map((alias) => `\`${alias}\``).join(", ")

  const lowercasedName = name.toLowerCase()
  const documentationUrl = `https://github.com/DavidAnson/markdownlint/blob/main/doc/${lowercasedName}.md`
  const documentationMarkdownLink = `[${name}](${documentationUrl})`
  return `${title}.\n\nAliases: ${aliasesAsText}\n\n@see ${documentationMarkdownLink}`
}

function isRuleDefinition(ruleName: string) {
  return ruleName.startsWith("MD")
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
