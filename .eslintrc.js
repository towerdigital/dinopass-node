module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ['standard', 'prettier/@typescript-eslint', 'prettier'],
  plugins: ['prettier'],
  overrides: [
    {
      files: ['src/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module'
      },
      plugins: ['@typescript-eslint']
    },
    {
      files: ['*.js', '*.jsx']
    }
  ],
  rules: {
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'prettier/prettier': 2
  }
}
