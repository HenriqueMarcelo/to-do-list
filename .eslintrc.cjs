module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
  ],
  rules: {
    'prefer-default-export': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-no-bind': 0,
    '@typescript-eslint/no-unused-vars': 1,
    'react/no-unstable-nested-components': 0,

    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'jsx-a11y/alt-text': 0,
    'no-restricted-globals': 1,
    'no-unused-vars': 1,

    'react/require-default-props': 0,
    'import/no-cycle': 0,
    'no-param-reassign': 0,
  },
};
