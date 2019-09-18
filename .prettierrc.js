// Prettier config
module.exports = {
  endOfLine: 'lf',
  singleQuote: true,
  overrides: [
    {
      files: '*.json',
      options: { parser: 'json' }
    }
  ]
};
