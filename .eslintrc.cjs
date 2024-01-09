module.exports = {
  plugins: [
    '@typescript-eslint',
    'filename-rules',
    'simple-import-sort',
    'react-refresh'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'eslint:recommended'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['tsconfig.json']
      }
    },
    {
      files: ['index.ts'],
      rules: {
        '@typescript-eslint/padding-line-between-statements': 'off'
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off'
      }
    }
  ],
  env: {
    node: true,
    browser: true
  },
  globals: {
    React: true,
    JSX: true
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.spec.*',
          '**/*.test.*',
          '**/tests/*',
          'src/tests/**.ts?(x)',
          './vite.config.ts'
        ],
        peerDependencies: true
      }
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    // eslint
    'object-curly-spacing': ['warn', 'always'],
    'max-len': [
      'warn',
      {
        code: 120,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true
      }
    ],
    'max-params': ['error', 4],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true
      }
    ],
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    'no-extraneous-dependencies': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-use-before-define': 'off',
    'no-restricted-exports': 'off',
    'padding-line-between-statements': 'off',
    '@typescript-eslint/no-base-to-string': 'off',
    '@typescript-eslint/no-unsafe-enum-comparison': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-redundant-type-constituents': 'off',
    '@typescript-eslint/no-duplicate-type-constituents': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: '*'
      },
      {
        blankLine: 'any',
        prev: ['import', 'case', 'default'],
        next: ['import', 'case', 'default']
      }
    ],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        ignoreRestArgs: true
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/prefer-default-export': 'off',
    // File names eslint
    'filename-rules/match': [
      2,
      { 'constants.ts': 'lowercase', tsx: 'pascalcase', ts: 'pascalcase' }
    ],
    // eslint general settings
    'react/jsx-key': 'error',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-boolean-value': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function'
      }
    ],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: [],
        labelAttributes: ['label'],
        controlComponents: [],
        depth: 3
      }
    ],
    'jsx-a11y/anchor-is-valid': [
      'off',
      {
        components: ['Link'],
        specialLink: ['to']
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'enum',
        format: ['UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow'
      }
    ]
  }
}
