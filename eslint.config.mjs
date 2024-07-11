import globals from 'globals';
import pluginJs from '@eslint/js';

const configList = [
    {
        // ESLint will consider only files matching the below patterns for linting.
        // The below matches all files with JavaScript-related extensions.
        files: ['**/*.{js,mjs,cjs,jsx}'],
    },
    {
        // Files matching the below patterns will not be linted, even if they also match patterns found in 'files'.
        // The first stops ESLint from operating in the `src/data` folder.
        // The second prevents linting of any file named `dont-touch.js`.
        ignores: ['src/data/**/*.{js,mjs,cjs,jsx}', '**/dont-touch.js'],
    },
    pluginJs.configs.recommended, // This enables all the rules designated as "recommended" here: https://eslint.org/docs/latest/rules/
    {
        // This sets which globals ESLint knows about when evaluating its 'no-global-assign' rule
        languageOptions: {
            globals: {
                ...globals.builtin,
                ...globals.es2025,
                ...globals.browser,
            },
        },
    },
    {
        // This adds jest-related globals for unit test files only.
        // The `languageOptions` and `globals` objects defined above are not overwritten, but instead extended.
        files: ['**/*.test.{js,mjs,cjs,jsx}'],
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
    },
];

export default configList;
 