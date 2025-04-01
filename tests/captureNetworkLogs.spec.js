// Import Playwright
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  // Set up listeners for request and response events
  page.on('request', request => {
    // console.log('>>', request.method(), request.url());
  });
  page.on('response', response => {
    // console.log('<<', response.status(), response.url());
  });

// perform keyboard actions
await page.keyboard.press('Enter'); // Simulate pressing the Enter key
await page.keyboard.press('Control+A'); // Simulate selecting all text

//scroll down the page
await page.mouse.wheel(0, 500); // Scroll down by 500 pixels
await page.mouse.wheel(0, -500); // Scroll up by 500 pixels


// handle checkboxes and radio buttons
// const checkboxLocator = page.locator('input[type=checkbox]');
// await checkboxLocator.setChecked(true); // Check the checkbox
// const radioLocator = page.locator('input[type=radio][value="option1"]');
// await radioLocator.setChecked(true); // Select the radio button with value "option1"


  // Navigate to your target URL
  await page.goto('https://google.com');
  // Close the browser after capturing logs
  await browser.close();

})();