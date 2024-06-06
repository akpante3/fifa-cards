import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './test/e2e',
  use: {
    headless: true,
    // Other Playwright configurations if needed
  },
});