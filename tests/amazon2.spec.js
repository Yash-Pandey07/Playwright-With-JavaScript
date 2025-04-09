const {test, expect ,chromium} = require('@playwright/test');

test('search and give price of the item on Amazon', async () => {   
    
    // Launch the browser and navigate to Amazon
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.amazon.in');
    await page.waitForTimeout(20000); // Wait for 5 seconds to ensure the page is fully loaded
    await page.fill('input[name="field-keywords"]', 'iphone 14 pro max');
    await page.press('input[name="field-keywords"]', 'Enter');

    // Wait for the search results to load
    
    // page.pause(); // Pause to observe the result

    const price = await page.locator("//span[text()='Apple iPhone 14 (512 GB) - Yellow']/parent::h2/parent::a/parent::div/following-sibling::div[@class='puisg-row'][1]/descendant::span[@class='a-price']/child::span[@class='a-offscreen']").innerText();

    console.log("Price : ", price);
    console.log("Price of the item is: ",  price);


})