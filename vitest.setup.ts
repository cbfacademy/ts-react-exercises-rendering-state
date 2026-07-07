// Registers @testing-library/jest-dom matchers (toBeInTheDocument, etc.) on
// Vitest's expect, and unmounts the React tree after every test so cases stay
// isolated. No globals are enabled, so tests import { describe, it, expect }
// from 'vitest' explicitly.
import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => {
    cleanup();
});
