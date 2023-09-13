/* eslint-disable */
export interface Config {
  /**
   * JSON Schema URI (used by some editors)
   */
  $schema?: string
  /**
   * accessibility - MD045
   */
  accessibility?: boolean
  /**
   * atx - MD018, MD019
   */
  atx?: boolean
  /**
   * atx_closed - MD020, MD021
   */
  atx_closed?: boolean
  /**
   * blank_lines - MD012, MD022, MD031, MD032, MD047
   */
  blank_lines?: boolean
  "blanks-around-fences"?: boolean | MD031Class
  "blanks-around-headers"?: boolean | MD022Class
  "blanks-around-headings"?: boolean | MD022Class
  "blanks-around-lists"?: boolean
  /**
   * blockquote - MD027, MD028
   */
  blockquote?: boolean
  /**
   * bullet - MD004, MD005, MD006, MD007, MD032
   */
  bullet?: boolean
  /**
   * code - MD014, MD031, MD038, MD040, MD046, MD048
   */
  code?: boolean
  "code-block-style"?: boolean | MD046Class
  "code-fence-style"?: boolean | MD048Class
  "commands-show-output"?: boolean
  /**
   * Default state for all rules
   */
  default?: boolean
  /**
   * emphasis - MD036, MD037, MD049, MD050
   */
  emphasis?: boolean
  "emphasis-style"?: boolean | MD049Class
  /**
   * Path to configuration file to extend
   */
  extends?: null | string
  "fenced-code-language"?: boolean | MD040Class
  "first-header-h1"?: boolean | MD002Class
  "first-heading-h1"?: boolean | MD002Class
  "first-line-h1"?: boolean | MD041Class
  "first-line-heading"?: boolean | MD041Class
  /**
   * hard_tab - MD010
   */
  hard_tab?: boolean
  "header-increment"?: boolean
  "header-start-left"?: boolean
  "header-style"?: boolean | MD003Class
  /**
   * headers - MD001, MD002, MD003, MD018, MD019, MD020, MD021, MD022, MD023, MD024, MD025,
   * MD026, MD036, MD041, MD043
   */
  headers?: boolean
  "heading-increment"?: boolean
  "heading-start-left"?: boolean
  "heading-style"?: boolean | MD003Class
  /**
   * headings - MD001, MD002, MD003, MD018, MD019, MD020, MD021, MD022, MD023, MD024, MD025,
   * MD026, MD036, MD041, MD043
   */
  headings?: boolean
  /**
   * hr - MD035
   */
  hr?: boolean
  "hr-style"?: boolean | MD035Class
  /**
   * html - MD033
   */
  html?: boolean
  /**
   * images - MD045, MD052, MD053
   */
  images?: boolean
  /**
   * indentation - MD005, MD006, MD007, MD027
   */
  indentation?: boolean
  /**
   * language - MD040
   */
  language?: boolean
  "line-length"?: boolean | MD013Class
  /**
   * line_length - MD013
   */
  line_length?: boolean
  "link-fragments"?: boolean
  "link-image-reference-definitions"?: boolean | MD053Class
  /**
   * links - MD011, MD034, MD039, MD042, MD051, MD052, MD053
   */
  links?: boolean
  "list-indent"?: boolean
  "list-marker-space"?: boolean | MD030Class
  /**
   * MD001/heading-increment/header-increment - Heading levels should only increment by one
   * level at a time
   */
  MD001?: boolean
  /**
   * MD002/first-heading-h1/first-header-h1 - First heading should be a top-level heading
   */
  MD002?: boolean | MD002Class
  /**
   * MD003/heading-style/header-style - Heading style
   */
  MD003?: boolean | MD003Class
  /**
   * MD004/ul-style - Unordered list style
   */
  MD004?: boolean | Md004
  /**
   * MD005/list-indent - Inconsistent indentation for list items at the same level
   */
  MD005?: boolean
  /**
   * MD006/ul-start-left - Consider starting bulleted lists at the beginning of the line
   */
  MD006?: boolean
  /**
   * MD007/ul-indent - Unordered list indentation
   */
  MD007?: boolean | Md007
  /**
   * MD009/no-trailing-spaces - Trailing spaces
   */
  MD009?: boolean | Md009
  /**
   * MD010/no-hard-tabs - Hard tabs
   */
  MD010?: boolean | Md010
  /**
   * MD011/no-reversed-links - Reversed link syntax
   */
  MD011?: boolean
  /**
   * MD012/no-multiple-blanks - Multiple consecutive blank lines
   */
  MD012?: boolean | Md012
  /**
   * MD013/line-length - Line length
   */
  MD013?: boolean | MD013Class
  /**
   * MD014/commands-show-output - Dollar signs used before commands without showing output
   */
  MD014?: boolean
  /**
   * MD018/no-missing-space-atx - No space after hash on atx style heading
   */
  MD018?: boolean
  /**
   * MD019/no-multiple-space-atx - Multiple spaces after hash on atx style heading
   */
  MD019?: boolean
  /**
   * MD020/no-missing-space-closed-atx - No space inside hashes on closed atx style heading
   */
  MD020?: boolean
  /**
   * MD021/no-multiple-space-closed-atx - Multiple spaces inside hashes on closed atx style
   * heading
   */
  MD021?: boolean
  /**
   * MD022/blanks-around-headings/blanks-around-headers - Headings should be surrounded by
   * blank lines
   */
  MD022?: boolean | MD022Class
  /**
   * MD023/heading-start-left/header-start-left - Headings must start at the beginning of the
   * line
   */
  MD023?: boolean
  /**
   * MD024/no-duplicate-heading/no-duplicate-header - Multiple headings with the same content
   */
  MD024?: boolean | Md024
  /**
   * MD025/single-title/single-h1 - Multiple top-level headings in the same document
   */
  MD025?: boolean | Md025
  /**
   * MD026/no-trailing-punctuation - Trailing punctuation in heading
   */
  MD026?: boolean | Md026
  /**
   * MD027/no-multiple-space-blockquote - Multiple spaces after blockquote symbol
   */
  MD027?: boolean
  /**
   * MD028/no-blanks-blockquote - Blank line inside blockquote
   */
  MD028?: boolean
  /**
   * MD029/ol-prefix - Ordered list item prefix
   */
  MD029?: boolean | Md029
  /**
   * MD030/list-marker-space - Spaces after list markers
   */
  MD030?: boolean | MD030Class
  /**
   * MD031/blanks-around-fences - Fenced code blocks should be surrounded by blank lines
   */
  MD031?: boolean | MD031Class
  /**
   * MD032/blanks-around-lists - Lists should be surrounded by blank lines
   */
  MD032?: boolean
  /**
   * MD033/no-inline-html - Inline HTML
   */
  MD033?: boolean | Md033
  /**
   * MD034/no-bare-urls - Bare URL used
   */
  MD034?: boolean
  /**
   * MD035/hr-style - Horizontal rule style
   */
  MD035?: boolean | MD035Class
  /**
   * MD036/no-emphasis-as-heading/no-emphasis-as-header - Emphasis used instead of a heading
   */
  MD036?: boolean | Md036
  /**
   * MD037/no-space-in-emphasis - Spaces inside emphasis markers
   */
  MD037?: boolean
  /**
   * MD038/no-space-in-code - Spaces inside code span elements
   */
  MD038?: boolean
  /**
   * MD039/no-space-in-links - Spaces inside link text
   */
  MD039?: boolean
  /**
   * MD040/fenced-code-language - Fenced code blocks should have a language specified
   */
  MD040?: boolean | MD040Class
  /**
   * MD041/first-line-heading/first-line-h1 - First line in a file should be a top-level
   * heading
   */
  MD041?: boolean | MD041Class
  /**
   * MD042/no-empty-links - No empty links
   */
  MD042?: boolean
  /**
   * MD043/required-headings/required-headers - Required heading structure
   */
  MD043?: boolean | Md043
  /**
   * MD044/proper-names - Proper names should have the correct capitalization
   */
  MD044?: boolean | Md044
  /**
   * MD045/no-alt-text - Images should have alternate text (alt text)
   */
  MD045?: boolean
  /**
   * MD046/code-block-style - Code block style
   */
  MD046?: boolean | MD046Class
  /**
   * MD047/single-trailing-newline - Files should end with a single newline character
   */
  MD047?: boolean
  /**
   * MD048/code-fence-style - Code fence style
   */
  MD048?: boolean | MD048Class
  /**
   * MD049/emphasis-style - Emphasis style should be consistent
   */
  MD049?: boolean | MD049Class
  /**
   * MD050/strong-style - Strong style should be consistent
   */
  MD050?: boolean | Md050
  /**
   * MD051/link-fragments - Link fragments should be valid
   */
  MD051?: boolean
  /**
   * MD052/reference-links-images - Reference links and images should use a label that is
   * defined
   */
  MD052?: boolean | Md052
  /**
   * MD053/link-image-reference-definitions - Link and image reference definitions should be
   * needed
   */
  MD053?: boolean | MD053Class
  "no-alt-text"?: boolean
  "no-bare-urls"?: boolean
  "no-blanks-blockquote"?: boolean
  "no-duplicate-header"?: boolean | Md024
  "no-duplicate-heading"?: boolean | Md024
  "no-emphasis-as-header"?: boolean | Md036
  "no-emphasis-as-heading"?: boolean | Md036
  "no-empty-links"?: boolean
  "no-hard-tabs"?: boolean | Md010
  "no-inline-html"?: boolean | Md033
  "no-missing-space-atx"?: boolean
  "no-missing-space-closed-atx"?: boolean
  "no-multiple-blanks"?: boolean | Md012
  "no-multiple-space-atx"?: boolean
  "no-multiple-space-blockquote"?: boolean
  "no-multiple-space-closed-atx"?: boolean
  "no-reversed-links"?: boolean
  "no-space-in-code"?: boolean
  "no-space-in-emphasis"?: boolean
  "no-space-in-links"?: boolean
  "no-trailing-punctuation"?: boolean | Md026
  "no-trailing-spaces"?: boolean | Md009
  /**
   * ol - MD029, MD030, MD032
   */
  ol?: boolean
  "ol-prefix"?: boolean | Md029
  "proper-names"?: boolean | Md044
  "reference-links-images"?: boolean | Md052
  "required-headers"?: boolean | Md043
  "required-headings"?: boolean | Md043
  "single-h1"?: boolean | Md025
  "single-title"?: boolean | Md025
  "single-trailing-newline"?: boolean
  /**
   * spaces - MD018, MD019, MD020, MD021, MD023
   */
  spaces?: boolean
  /**
   * spelling - MD044
   */
  spelling?: boolean
  "strong-style"?: boolean | Md050
  /**
   * ul - MD004, MD005, MD006, MD007, MD030, MD032
   */
  ul?: boolean
  "ul-indent"?: boolean | Md007
  "ul-start-left"?: boolean
  "ul-style"?: boolean | Md004
  /**
   * url - MD034
   */
  url?: boolean
  /**
   * whitespace - MD009, MD010, MD012, MD027, MD028, MD030, MD037, MD038, MD039
   */
  whitespace?: boolean
  [property: string]: any
}

export interface MD002Class {
  /**
   * Heading level
   */
  level?: number
}

export interface MD003Class {
  /**
   * Heading style
   */
  style?: MD003Style
}

/**
 * Heading style
 */
export type MD003Style =
  | "consistent"
  | "atx"
  | "atx_closed"
  | "setext"
  | "setext_with_atx"
  | "setext_with_atx_closed"

export interface Md004 {
  /**
   * List style
   */
  style?: MD004Style
}

/**
 * List style
 */
export type MD004Style = "consistent" | "asterisk" | "plus" | "dash" | "sublist"

export interface Md007 {
  /**
   * Spaces for indent
   */
  indent?: number
  /**
   * Spaces for first level indent (when start_indented is set)
   */
  start_indent?: number
  /**
   * Whether to indent the first level of the list
   */
  start_indented?: boolean
}

export interface Md009 {
  /**
   * Spaces for line break
   */
  br_spaces?: number
  /**
   * Allow spaces for empty lines in list items
   */
  list_item_empty_lines?: boolean
  /**
   * Include unnecessary breaks
   */
  strict?: boolean
}

export interface Md010 {
  /**
   * Include code blocks
   */
  code_blocks?: boolean
  /**
   * Fenced code languages to ignore
   */
  ignore_code_languages?: string[]
  /**
   * Number of spaces for each hard tab
   */
  spaces_per_tab?: number
}

export interface Md012 {
  /**
   * Consecutive blank lines
   */
  maximum?: number
}

export interface MD013Class {
  /**
   * Number of characters for code blocks
   */
  code_block_line_length?: number
  /**
   * Include code blocks
   */
  code_blocks?: boolean
  /**
   * Include headings
   */
  headers?: boolean
  /**
   * Number of characters for headings
   */
  heading_line_length?: number
  /**
   * Include headings
   */
  headings?: boolean
  /**
   * Number of characters
   */
  line_length?: number
  /**
   * Stern length checking
   */
  stern?: boolean
  /**
   * Strict length checking
   */
  strict?: boolean
  /**
   * Include tables
   */
  tables?: boolean
}

export interface MD022Class {
  /**
   * Blank lines above heading
   */
  lines_above?: number[] | number
  /**
   * Blank lines below heading
   */
  lines_below?: number[] | number
}

export interface Md024 {
  /**
   * Only check sibling headings
   */
  allow_different_nesting?: boolean
  /**
   * Only check sibling headings
   */
  siblings_only?: boolean
}

export interface Md025 {
  /**
   * RegExp for matching title in front matter
   */
  front_matter_title?: string
  /**
   * Heading level
   */
  level?: number
}

export interface Md026 {
  /**
   * Punctuation characters
   */
  punctuation?: string
}

export interface Md029 {
  /**
   * List style
   */
  style?: MD029Style
}

/**
 * List style
 */
export type MD029Style = "one" | "ordered" | "one_or_ordered" | "zero"

export interface MD030Class {
  /**
   * Spaces for multi-line ordered list items
   */
  ol_multi?: number
  /**
   * Spaces for single-line ordered list items
   */
  ol_single?: number
  /**
   * Spaces for multi-line unordered list items
   */
  ul_multi?: number
  /**
   * Spaces for single-line unordered list items
   */
  ul_single?: number
}

export interface MD031Class {
  /**
   * Include list items
   */
  list_items?: boolean
}

export interface Md033 {
  /**
   * Allowed elements
   */
  allowed_elements?: string[]
}

export interface MD035Class {
  /**
   * Horizontal rule style
   */
  style?: string
}

export interface Md036 {
  /**
   * Punctuation characters
   */
  punctuation?: string
}

export interface MD040Class {
  /**
   * List of languages
   */
  allowed_languages?: string[]
  /**
   * Require language only
   */
  language_only?: boolean
}

export interface MD041Class {
  /**
   * RegExp for matching title in front matter
   */
  front_matter_title?: string
  /**
   * Heading level
   */
  level?: number
}

export interface Md043 {
  /**
   * List of headings
   */
  headers?: string[]
  /**
   * List of headings
   */
  headings?: string[]
  /**
   * Match case of headings
   */
  match_case?: boolean
}

export interface Md044 {
  /**
   * Include code blocks
   */
  code_blocks?: boolean
  /**
   * Include HTML elements
   */
  html_elements?: boolean
  /**
   * List of proper names
   */
  names?: string[]
}

export interface MD046Class {
  /**
   * Block style
   */
  style?: MD046Style
}

/**
 * Block style
 */
export type MD046Style = "consistent" | "fenced" | "indented"

export interface MD048Class {
  /**
   * Code fence style
   */
  style?: MD048Style
}

/**
 * Code fence style
 */
export type MD048Style = "consistent" | "backtick" | "tilde"

export interface MD049Class {
  /**
   * Emphasis style
   */
  style?: MD049Style
}

/**
 * Emphasis style
 *
 * Strong style
 */
export type MD049Style = "consistent" | "asterisk" | "underscore"

export interface Md050 {
  /**
   * Strong style
   */
  style?: MD049Style
}

export interface Md052 {
  /**
   * Include shortcut syntax
   */
  shortcut_syntax?: boolean
}

export interface MD053Class {
  /**
   * Ignored definitions
   */
  ignored_definitions?: string[]
}
