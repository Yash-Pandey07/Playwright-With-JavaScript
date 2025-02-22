import { test, expect } from '@playwright/test';

// To run only this file, use the following command:
// npx playwright test tests/login.spec.js              // Headless mode
// npx playwright test ./tests/login.spec.js --headed   // Headed mode

test("Valid Login", async ({ page }) => {
    // Maximize the browser window by setting the viewport size
    await page.setViewportSize({ width: 1920, height: 1080 });

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
