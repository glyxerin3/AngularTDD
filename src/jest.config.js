const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
    "preset": "jest-preset-angular",
    "setupTestFrameworkScriptFile": "<rootDir>/src/setup-jest.ts",
    "transform": {
       '^.+\\.(ts|html)$': '<rootDir>/node_modules/jest-preset-angular/preprocessor.js',
       '^.+\\.js$': 'babel-jest'
     },
    "transformIgnorePatterns": ['node_modules/(?!@ngrx|ng2-translate|@ionic|lodash|ionic-angular)'],
  };