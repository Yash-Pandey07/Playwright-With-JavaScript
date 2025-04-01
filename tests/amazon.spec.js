const { test, expect } = require('@playwright/test');

test('search and select the second item on Amazon', async ({ page }) => {
  await page.goto('https://www.amazon.com');
  await page.fill('input[name="field-keywords"]', 'A');
  await page.press('input[name="field-keywords"]', 'Enter');

  // Wait for the search results to load
  await page.waitForSelector('.s-main-slot');

  // Click the second item (based on the snippet provided)
  await page.locator('.s-line-clamp-2 a.a-link-normal').nth(1).click();

  // Wait for navigation to complete
  await page.waitForLoadState('load');

  await page.pause(); // Pause to observe the result
  await page.close();
});