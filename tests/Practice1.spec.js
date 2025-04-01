const { test } = require('@playwright/test');

test('Practice test - Navigate Google and go back', async ({ page }) => {
  // Navigate to Google
  await page.goto('https://www.google.com/');

  // Fill the search box
  await page.fill("//textarea[@id='APjFqb']", "Google");
  const url = await page.url()
  console.log("URL is: ", url);

  const title = await page.title()
  console.log("Title is: ", title);
  await expect(title).toBe("Google");
  
  await page.keyboard.press('Enter');
  await page.waitForTimeout(3000);
  // Go back in browser history
  await page.goBack();

  // Wait for 2 seconds
  // await page.waitForTimeout(5000);
});