// Prettier config
module.exports = {
  endOfLine: 'lf',
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: '*.json',
      options: { parser: 'json' }
    }
  ]
}
