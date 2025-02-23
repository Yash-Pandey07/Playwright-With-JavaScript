const { test, expect } = require("@playwright/test");

const { chromium } = require('playwright');


test("Verify Error Message", async ({ page }) => {
const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: {
        width: 1707 * 1.50,
        height: 1067 * 1.50
    }
  });
//   page = await context.newPage();
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  ); // Go to the login page
  await page.getByPlaceholder("Username").fill("Admin", { delay: 200 }); // Fill in the username field
  // await page.locator("input[name='password']").type('admin123', { delay: 100 }); // Delay is added to simulate human typing
  await page.getByPlaceholder("Password").fill("admin12", { delay: 100 }); // Fill in the password field
  await page.locator("//button[@type='submit']").click();
  const errorMessage = await page
    .locator("//p[contains(@class,'alert-content-text')]")
    .textContent();
  console.log("Error message is " + errorMessage);

  // expect(errorMessage.includes("Invalid")).toBeTruthy();   // This will pass
  // expect(errorMessage.includes("Invalid False")).toBeTruthy(); // This will fail
  expect(errorMessage === "Invalid credentials").toBeTruthy();
});
