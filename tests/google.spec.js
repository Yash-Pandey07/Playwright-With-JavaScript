import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
    await page.goto('https://www.google.com');
    const title = await page.title();
    expect(title).toBe('Google');
    const url = await page.url();
    console.log("Title: ", title);
    console.log("URL: ", url);

    await expect(page).toHaveTitle('Google');
    await expect(page).toHaveURL('https://www.google.com/');
    await expect(page).toHaveText('Google Search');
});
