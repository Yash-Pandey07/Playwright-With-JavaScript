const { describe } = require('node:test');
const { chromium } = require('playwright');

// Ensure Jest environment is loaded

describe('Parallel tests with Jest and Playwright', () => {
  let browser;
  beforeAll(async () => {
    browser = await chromium.launch();
  });
  afterAll(async () => {
    await browser.close();
  });
  test('test case 1', async () => {
    const page = await browser.newPage();
    await page.goto('https://example.com');
    // Additional test logic
    await page.close();
  });
  test('test case 2', async () => {
    const page = await browser.newPage();
    await page.goto('https://example.org');
    // Additional test logic
    await page.close();
  });
});
// To execute these tests in parallel, run the Jest command without the --runInBand flag