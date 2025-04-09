import {chromimum, test, expect} from '@playwright/test'

test ('Without Page fixture', async ({page}) => {

    // const browser = await chromium.launch();
    // const context = await browser.newContext();
    // const page = await context.newPage();
    await page.goto("https://www.saucedemo.com/v1/index.html");
    await page.fill("#user-name", "standard_user");
    await page.locator("#password").fill('secret_sauce');
    await page.click(".btn_action");

    await page.locator("text='Sauce Labs Backpack'").click();



})
