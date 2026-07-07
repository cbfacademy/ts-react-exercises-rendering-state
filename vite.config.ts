import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/ and https://vitest.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        // React components need a DOM; jsdom provides one under Node.
        environment: 'jsdom',
        setupFiles: ['./vitest.setup.ts'],
        // Autograding tests live in tests/ (a protected path in Classroom).
        include: ['tests/**/*.test.{ts,tsx}'],
        // Always emit JUnit XML for the CI test-reporter; the default reporter
        // stays on for local runs.
        reporters: ['default', 'junit'],
        outputFile: { junit: 'test-results/junit.xml' },
    },
});
