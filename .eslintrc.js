module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ['airbnb', 'prettier/@typescript-eslint', 'prettier'],
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
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'prettier/prettier': 2
  }
};
