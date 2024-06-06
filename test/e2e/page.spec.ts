import { test, expect } from '@playwright/test'

test('Is Homepage working', async ({ page }) => {
  await page.goto('http://localhost:3000')

  // Step 1 - Is Homepage working
  await expect(page.locator('nav')).toBeVisible()
  await expect(page.locator('.loading-container')).toBeVisible()
})