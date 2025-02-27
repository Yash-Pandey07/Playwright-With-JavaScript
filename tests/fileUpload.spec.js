import { test, expect } from '@playwright/test';

test('Verify file upload', async ({ page }) => {
    // Navigate to the upload page
    await page.goto("https://the-internet.herokuapp.com/upload");

    // Upload the file
    await page.locator("#file-upload").setInputFiles("./uploads/Screenshot1.png")

    /*
    // Submit the form
    // await page.locator("(//input[@id='file-submit'])[1]").click();
    await page.locator("#file-submit").click();

//     // Wait for the element with the text 'File Uploaded!' to appear
    expect(await page.locator("//h3")).toHaveText("File Uploaded!");
    */
    await page.waitForTimeout(5000)

    await page.locator('#file-submit').click()
    
    await page.waitForTimeout(5000)
    
    //const uploadMsg  = await page.locator("//h3[normalize-space()='File Uploaded!']")
    
    //console.log("the text is  =============",uploadMsg)
    
    expect (await page.locator("//h3")).toHaveText("File Uploaded!") 

});
