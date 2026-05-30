import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'

export default [
  js.configs.recommended,
  stylistic.configs['recommended'],
  {
    languageOptions: {
      globals: {
        console: 'readonly',
      },
    },
  },
]
