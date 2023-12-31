// @ts-check
const { defineMarkdownlintConfig } = require("./dist")

module.exports = defineMarkdownlintConfig({
  MD033: false,
  MD041: false,
  MD018: false,
  indentation: false,
  blank_lines: false,
  whitespace: false,
  line_length: false,
})
