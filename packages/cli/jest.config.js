const { nodeFlakeTracking } = require('../../flakey-test-tracking/jest/config.js')

module.exports = {
  preset: 'ts-jest',
  ...nodeFlakeTracking,
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).ts?(x)'],
  setupFilesAfterEnv: ['@celo/dev-utils/lib/matchers', ...nodeFlakeTracking.setupFilesAfterEnv],
  globalSetup: '<rootDir>/src/test-utils/setup.global.ts',
  globalTeardown: '<rootDir>/src/test-utils/teardown.global.ts',
}
