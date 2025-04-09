const { test, chromium } = require('@playwright/test');

test('Search and fetch price of a product on Amazon', async () => {   
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    const productName = 'iPhone 14 Pro Max'; // Change this to any product

    await page.goto('https://www.amazon.in');
    await page.waitForTimeout(20000); // Wait for 20 seconds to ensure the page is fully loaded
    await page.fill('input[name="field-keywords"]', productName);
    await page.press('input[name="field-keywords"]', 'Enter');

    // Wait for search results to load
    await page.waitForSelector('.s-main-slot', { timeout: 10000 });

    // Create a dynamic XPath for extracting the price
    const priceXPath = `//h2[contains(., '${productName}')]/ancestor::div[contains(@class, 's-result-item')]//span[contains(@class, 'a-price-whole')]`;

    const priceElement = await page.locator(priceXPath).first();
    
    if (await priceElement.isVisible()) {
        const price = await priceElement.innerText();
        console.log(`Price of "${productName}" is: ₹${price}`);
    } else {
        console.log(`Price not found for "${productName}".`);
    }

    await browser.close();
});
