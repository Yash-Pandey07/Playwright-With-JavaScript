const { test, expect } = require("@playwright/test");

test("selecting an option from a dropdown", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/signup");
  await page.locator("#state").selectOption({ label: "Karnataka" });
//   await page.waitForTimeout(3000);
  await page.locator("#state").selectOption({ value: "Delhi" });
//   await page.waitForTimeout(3000);
  await page.locator("#state").selectOption({ index: 2 });
//   await page.waitForTimeout(3000);

  const allStateValues = await page.locator("#state").textContent();    // get all the values of the dropdown
    console.log(allStateValues);
    await expect(allStateValues.includes("Kerala")).toBeTruthy();     // check if the value is present in the dropdown
//  await expect(allStateValues).toContain("Delhi").toBeTruely();     // check if the value is present in the dropdown
//     await expect(allStateValues).toContain("Karnataka").toBeTruely();     // check if the value is present in the dropdown
  
});
