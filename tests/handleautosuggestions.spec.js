const {test, expect} = require('@playwright/test');

test('Handle autosuggestions using keyboard' , async ({page}) => {

    await page.goto("https://google.com/");

    await page.locator("textarea[name='q']").type("playwright", {delay: 100})

    await page.waitForSelector("//li[@role='presentation']", {state: 'attached'})

    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)

})

test('Handle autosuggestions using Loops' , async ({page}) => {     //test.only() to run only this test case

    await page.goto("https://google.com/");
 
    await page.locator("textarea[name='q']").type("playwright", {delay: 100})

    await page.waitForSelector("//li[@role='presentation']")

    const element = await page.$$("//li[@role='presentation']")

    for(let i=0;i<element.length;i++){
        // if(element[i].textContent() == 'playwright testing'){

        const text = await element[i].textContent();
        if(text.includes('automation'))
        {
            await element[i].click()
            break;
        }
        await page.waitForTimeout(1000)
    }
    await page.waitForTimeout(3000)
})