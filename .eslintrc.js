module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ['eslint:recommended'],
  plugins: ["jest-dom"],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'], // This configuration will apply only to TypeScript files
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'plugin:react/recommended', // React rules
        'plugin:react-hooks/recommended', // React hooks rules
        'plugin:jsx-a11y/recommended', // Accessibility rules
      ],
      rules: {
        // We will use TypeScript's types for component props instead
        'react/prop-types': 'off',

        // No need to import React when using Next.js
        'react/react-in-jsx-scope': 'off',

        // This rule is not compatible with Next.js's <Link /> components
        'jsx-a11y/anchor-is-valid': 'off',

        'react/display-name': [0],

        // Why would you want unused vars?
        '@typescript-eslint/no-unused-vars': [
          'error',
          { varsIgnorePattern: '^_', args: 'none', ignoreRestSiblings: true },
        ],

        // I suggest this setting for requiring return types on functions only where useful
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      // ...
      extends: [
        // ...
        'prettier/@typescript-eslint', // Prettier plugin
        'plugin:prettier/recommended', // Prettier recommended rules
      ],
      rules: {
        // ...
        'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Includes .prettierrc.js rules
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'] // run these plugins only in test files
    },
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
      },
    },
  ],
}
