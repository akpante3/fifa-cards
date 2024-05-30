import { test, expect } from '@playwright/test'

test('Is Homepage working', async ({ page, baseURL }) => {
  await page.goto(baseURL + '/')

  // Step 1 - Is Homepage working
  await expect(page.locator('nav')).toBeVisible()
  await expect(page.locator('.loading-container')).toBeVisible()
})