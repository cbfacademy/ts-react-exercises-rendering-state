import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
    globalIgnores(['dist', 'test-results']),
    {
        files: ['src/**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
            prettierConfig,
        ],
        languageOptions: {
            globals: globals.browser,
        },
    },
    {
        // Test files and Node-side config run under Vitest/Node, not the browser
        // fast-refresh pipeline, so lint them without the React-refresh rule.
        files: ['tests/**/*.{ts,tsx}', 'vite.config.ts', 'vitest.setup.ts'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            prettierConfig,
        ],
        languageOptions: {
            globals: { ...globals.node, ...globals.browser },
        },
    },
]);
