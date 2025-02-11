import type { ESLint, Linter } from 'eslint'
import { version } from '../package.json'
import ifNewline from './rules/if-newline'
import importDedupe from './rules/import-dedupe'
import topLevelFunction from './rules/top-level-function'
import noImportNodeModulesByPath from './rules/no-import-node-modules-by-path'
import noImportDist from './rules/no-import-dist'
import noTsExportEqual from './rules/no-ts-export-equal'
import consistentListNewline from './rules/consistent-list-newline'

const plugin = {
  meta: {
    name: 'tm2js',
    version,
  },
  rules: {
    'consistent-list-newline': consistentListNewline,
    'if-newline': ifNewline,
    'import-dedupe': importDedupe,
    'no-import-node-modules-by-path': noImportNodeModulesByPath,
    'no-import-dist': noImportDist,
    'no-ts-export-equal': noTsExportEqual,
    'top-level-function': topLevelFunction,
  },
} satisfies ESLint.Plugin

export default plugin

type RuleDefinitions = typeof plugin['rules']

export type RuleOptions = {
  [K in keyof RuleDefinitions]: RuleDefinitions[K]['defaultOptions']
}

export type Rules = {
  [K in keyof RuleOptions]: Linter.RuleEntry<RuleOptions[K]>
}
