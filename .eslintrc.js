module.exports = {
  env: {
    browser: true,
    es2021: true
  },

  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: 0
  }
}
