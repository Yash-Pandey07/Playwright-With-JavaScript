import {test , expect} from '@playwright/test';
import exp from 'constants';

test('Handle alerts' , async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await page.locator("//button[text()='Click for JS Alert']").click();
    await page.waitForTimeout(2000)
    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        console.log(dialog.message());
        await dialog.accept();
    });   

})