const {test , expect} = require('@playwright/test');

const data = JSON.parse(JSON.stringify(require("../testdata.json")));


// test('Login with JSON file data', async ({page}) => {

//     await page.goto("https://freelance-learn-automation.vercel.app/login");

//     // const data = require('../testdata.json');
//     await page.getByPlaceholder("Enter Email").type(data.username);
//     await page.getByPlaceholder("Enter Password").type(data.password);
//     // await page.getByRole("button",{name:"Sign in"}).click();
//     // await page.waitForTimeout(3000);

//     // await expect(page).toHaveURL(/dashboard/);

//     // await page.locator("//span[text()='Manage']").hover();
//     // await page.locator("//a[normalize-space()='Manage Courses']").click();
//     // await page.waitForTimeout(3000);

//     // await page.getByText('Logout').click();
//     // await expect(page).toHaveURL(/login/);
// });

test.describe('Login with 3 users data with JSON file', () => {
    for(const user of data){
        test.describe(`Login with ${user.username} data`, () => {
            
            test('Login to Application', async ({page}) => {

                await page.goto("https://freelance-learn-automation.vercel.app/login");
                await page.getByPlaceholder("Enter Email").type(user.username);
                await page.getByPlaceholder("Enter Password").type(user.password);
                await page.waitForTimeout(3000);
                
            });
        });
    }
});