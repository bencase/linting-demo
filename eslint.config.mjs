import globals from 'globals';
import eslintjs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';

const configList = tseslint.config(
    {
        // ESLint will consider only files matching the below patterns for linting.
        // The below matches all files with JavaScript-related extensions.
        files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    },
    {
        // Files matching the below patterns will not be linted, even if they also match patterns found in 'files'.
        // The first stops ESLint from operating in the `src/data` folder.
        // The second prevents linting of any file named `dont-touch.js`.
        ignores: ['src/data/**/*.{js,mjs,cjs,jsx,ts,tsx}', '**/dont-touch.js'],
    },
    eslintjs.configs.recommended, // This enables all the rules designated as "recommended" here: https://eslint.org/docs/latest/rules/
    {
        // This turns off the 'no-fallthrough' rule, and turns off the 'require-atomic-updates' rule.
        // These both would otherwise have the opposite setting according to the recommended rules enabled above.
        // 'require-atomic-updates' is set to show as an error when the issue is found by ESLint.
        rules: {
            'no-fallthrough': 'off',
            'require-atomic-updates': 'error',
        },
    },
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
        files: ['**/*.test.{js,mjs,cjs,jsx,ts,tsx}'],
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
    },
    ...tseslint.configs.recommended, // Imported recommended configs for TypeScript. You don't need to use `files` or `ignores to ensure this only applies to TypeScript. That is already taken care of.
    ...fixupConfigRules(pluginReactConfig),
    {
        settings: {
            react: {
                // This removes 'Warning: React version not specified in eslint-plugin-react settings.'
                version: 'detect',
            },
        },
    },
    {
        plugins: {
            'react-hooks': fixupPluginRules(eslintPluginReactHooks),
        },
        rules: {
            ...eslintPluginReactHooks.configs.recommended.rules,
        },
    },
);

export default configList;
