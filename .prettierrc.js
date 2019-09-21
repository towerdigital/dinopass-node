// Prettier config
module.exports = {
  endOfLine: 'lf',
  singleQuote: true,
  printWidth: 100,
  overrides: [
    {
      files: '*.json',
      options: { parser: 'json' }
    }
  ]
};
