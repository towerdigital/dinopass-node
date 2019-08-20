module.exports = function(wallaby) {
  return {
    files: [
      'src/**/*.js',
      'package.json', // <--
      '!src/**/__tests__/*.js'
    ],

    tests: ['src/**/__tests__/*.js'],

    env: {
      type: 'node'
    },

    testFramework: 'jest',

    setup: function(wallaby) {
      const jestConfig = require('./jest.config').jest
      /* for example:
       * jestConfig.globals = { "__DEV__": true }; */
      wallaby.testFramework.configure(jestConfig)
    }
  }
}
