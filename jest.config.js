/**
 * Jest Config
 * https://jestjs.io/docs/en/configuration.html
 * */

module.exports = {
  coverageDirectory: 'coverage',
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  roots: ['<rootDir>'],
  testEnvironment: 'node',
  testMatch: [
    'src/**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  verbose: true,
  setupFilesAfterEnv: ['jest-extended', 'jest-chain']
}
