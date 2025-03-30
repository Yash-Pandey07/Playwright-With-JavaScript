const { chromium } = require('playwright');

(async () => {
  // Launch a new browser instance
  const browser = await chromium.launch({ headless: false });

  // Open a new browser context (like a new tab, but with isolated cookies/storage)
  const context = await browser.newContext();

  // Create a new page in the context
  const page = await context.newPage();

  // Navigate to a URL
  await page.goto('https://example.com');

  // Perform actions on the page (if needed)

  // Close the browser
  await browser.close();
})();