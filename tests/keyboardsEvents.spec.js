import {test ,expect} from '@playwright/test';
//https://playwright.dev/docs/api/class-keyboard
//https://playwright.dev/docs/api/class-keyboard#keyboardpresskey-options

// Set a longer timeout for the entire test
test.setTimeout(60000); // 60 seconds

test('Verify keyboard events', async ({page}) => {

    // Navigate to the page
    await page.goto("https://google.com/");

    await page.locator("textarea[name='q']").type("playwright parent company!", {delay: 100})

    await page.keyboard.press("ControlOrMeta+A");
    await page.keyboard.press("ControlOrMeta+C");
    await page.waitForTimeout(3000)
    await page.keyboard.press("Backspace");
    await page.waitForTimeout(3000)
    await page.keyboard.press("ControlOrMeta+V")
    
    await page.locator("textarea[name='q']").focus()
    await page.keyboard.press("ControlOrMeta+A");
    await page.keyboard.press("Backspace");
    await page.waitForTimeout(3000)
    await page.keyboard.type("playwright parent company!")
    await page.waitForTimeout(3000)
    await page.keyboard.press("ArrowLeft")
    await page.keyboard.down("Shift")
    await page.waitForTimeout(3000)
    for(let i=0; i<8; i++){
        await page.keyboard.press("ArrowLeft")
        await page.waitForTimeout(1000)
    }

    await page.keyboard.up("Shift")
    // await page.waitForTimeout(3000)
    await page.keyboard.press("Backspace")
    


    // await page.keyboard.press("Enter")


    await page.waitForTimeout(5000)
});