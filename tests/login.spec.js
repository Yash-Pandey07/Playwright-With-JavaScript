import { test, expect ,chromium } from '@playwright/test';

// To run only this file, use the following command:
// npx playwright test tests/login.spec.js              // Headless mode
// npx playwright test ./tests/login.spec.js --headed   // Headed mode

test.use({viewport: { width: 848, height: 931 }});// Custom viewport size  
test("Valid Login", async ({ page }) => {
    // const browser = await chromium.launch({
    //     headless: false,
    //     args: ["--start-maximized"]
    //   });
    //   const context = await browser.newContext({
    //     viewport: { width: 1707, height: 1067 },
    //     deviceScaleFactor: 1.5 // Explicitly set the deviceScaleFactor
    //   });
    //   page = await context.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Go to the login page

    await page.getByPlaceholder('Username').fill('Admin', { delay: 200 }); // Fill in the username field
    await page.locator("input[name='password']").type('admin123', { delay: 100 }); // Delay is added to simulate human typing 
    await page.locator("//button[@type='submit']").click();

    await expect(page).toHaveURL(/.*dashboard.*/);

    // const currentURL = page.url();
    // expect(currentURL.includes('dashboard')).toBeTruthy();
    // await expect(page).toHaveURL(/dashboard/);

    await page.getByAltText('profile picture').first().click();
    await page.getByText('Logout').click();

    await expect(page).toHaveURL(/login/);
    
});
