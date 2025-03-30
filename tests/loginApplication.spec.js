const {test , expect} = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage.js');
const { HomePage } = require('../pages/homepage.js');
const username = "admin@email.com"
const password = "admin@123"

test('Login to Application using POM', async ({page}) => { 

    await page.goto("https://freelance-learn-automation.vercel.app/login");
    const loginPage = new LoginPage(page)
    await loginPage.loginToApplication(username , password);
    await page.waitForTimeout(3000);

    const homePage = new HomePage(page)

    await homePage.verifyManageOption();
    await homePage.logoutFromApplication();

    await loginPage.verifySignIn();
});