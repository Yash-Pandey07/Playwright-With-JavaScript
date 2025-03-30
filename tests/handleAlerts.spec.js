import {test , expect} from '@playwright/test';
import exp from 'constants';

test('Handle conform box' , async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await page.locator("//button[text()='Click for JS Confirm']").click();
    await page.waitForTimeout(2000)
    page.on('dialog', async (dialogWindow) => {
        expect(dialogWindow.type()).toContain('confirm');
        console.log(dialogWindow.message());
        expect(dialogWindow.message()).toContain('I am a JS Confirm');
        await page.waitForTimeout(2000)
        // await dialogWindow.accept();
        await dialogWindow.dismiss();
    });   

    await page.locator("//button[text()='Click for JS Confirm']").click();
    await page.waitForTimeout(2000)


})

test.skip('Handle alerts' , async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await page.locator("//button[text()='Click for JS Alert']").click();
    await page.waitForTimeout(2000)
    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toContain('alert');
        console.log(dialog.message());
        expect(dialog.message()).toContain('I am a JS Alert');
        await page.waitForTimeout(2000)
        await dialog.accept();
    });   

    await page.locator("//button[text()='Click for JS Alert']").click();
    await page.waitForTimeout(2000)


})

test('Handle prompt' , async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async (dialogWindow) => {
        expect(dialogWindow.type()).toContain('prompt');
        console.log(dialogWindow.message());
        expect(dialogWindow.message()).toContain('I am a JS prompt');
        await page.waitForTimeout(2000)
        await dialogWindow.accept('Hello World');
        // await dialogWindow.dismiss();
    });   
    await page.locator("//button[text()='Click for JS Prompt']").click();
    await page.waitForTimeout(2000)


})