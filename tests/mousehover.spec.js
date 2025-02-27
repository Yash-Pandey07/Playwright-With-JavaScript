import {test ,expect} from '@playwright/test';

test('mouse hover', async ({page}) => {
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.getByPlaceholder("Enter Email").type("admin@email.com");
    await page.getByPlaceholder("Enter Password").type("admin@123");

    await page.getByRole("button",{name:"Sign in"}).click();
    await page.waitForTimeout(3000);
    await page.locator("//span[text()='Manage']").hover();

    await page.locator("//a[normalize-space()='Manage Courses']").click();
    await page.waitForTimeout(3000);

});