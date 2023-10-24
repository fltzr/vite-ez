import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  server: {
    open: true,
  },
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/setupTests', 'src/tests/setup-tests.ts'],
    mockReset: true,
  },
});
