const {test , expect} = require('@playwright/test');

test('Valid Login' , async ({page}) => {

    //navigate to the login page
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //fill the username and password fields
    await page.getByPlaceholder("Username").fill("Admin");

    await page.locator("input[name='password']").type("admin123" ,{delay: 100});

    await page.waitForTimeout(2000);
    await page.locator("button[type='submit']").click();

    //wait for the dashboard page to load
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await page.waitForTimeout(2000);


})