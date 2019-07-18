module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/packages/**/src/**/*.(ts|tsx)',
        '!<rootDir>/packages/**/src/**/*.stories.(ts|tsx)',
        '!<rootDir>/packages/**/src/**/*.test.(ts|tsx)',
        '!<rootDir>/packages/theme/**/*',
        '!<rootDir>/packages/utils/**/*',
        '!<rootDir>/packages/core/**/Table/**/*',
        '!<rootDir>/packages/core/**/CssBaseline/**/*',
        '!<rootDir>/packages/loaders/**/*',
        '!<rootDir>/packages/icons/**/*',
        '!<rootDir>/packages/**/index.(ts|tsx)',
        '!<rootDir>/packages/**/types.(ts|tsx)'
    ],
    coverageDirectory: '<rootDir>/coverage/',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    testEnvironment: 'jsdom',
    rootDir: './',
    projects: [
        {
            displayName: 'core',
            setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', 'jest-styled-components'],
            testMatch: ['<rootDir>/packages/core/src/**/*.(spec|test).(ts|tsx)']
        },
        {
            displayName: 'layout',
            setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', 'jest-styled-components'],
            testMatch: ['<rootDir>/packages/layout/src/**/*.(spec|test).(ts|tsx)']
        },
        {
            displayName: 'icons',
            setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', 'jest-styled-components'],
            testMatch: ['<rootDir>/packages/icons/src/icons/**/*.(spec|test).(ts|tsx)']
        }
    ]
};
