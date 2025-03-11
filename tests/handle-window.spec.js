import {test, expect} from '@playwright/test';

test('Working with multiple windows' , async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    const [newPage] = await Promise.all([
        
        context.waitForEvent('page'),
        page.locator("(//a[contains(@href,'facebook')])[1]").click()

    ])

    await newPage.waitForLoadState();
    // await newPage.locator('//input[@name="email"][1]').fill('default@email.com');
    await newPage.locator('//*[@id="«r2»"]').fill('default@email.com');
    
    await newPage.waitForTimeout(3000);


})
