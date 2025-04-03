import {test, expect} from '@playwright/test';

test('Handle frames' , async ({page}) => {

    await page.goto("https://docs.oracle.com/javase/8/docs/api/");

    const iframe = await page.frameLocator("//frame[@name='packageListFrame']");
    
    await iframe.locator("//a[text()='java.applet']").click();

    await page.screenshot({path:"screenshot.png", fullPage:true});
    
    //specific element screenshot
    const element = await page.locator("//h2[text()='Class Applet']").screenshot();

    await page.pause();

})
