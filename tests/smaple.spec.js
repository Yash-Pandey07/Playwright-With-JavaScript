const {test , expect} = require('@playwright/test')

test('My First Test', async ({page}) => {
    await page.goto('https://playwright.dev/')
    await expect(page).toHaveTitle(/Playwright/)
});

//to skip a test
test.skip('My Second Test', async ({page}) => {
  // write your test here
  expect(1).toBe(1)
});

//to run only this test use 'only'
// test.only('My Third Test', async ({page}) => {
//   // write your test here
//   expect("Test T E S T test").toContain("T E S T")
//   expect(true).toBeTruthy()
// }
// );

test('My Fourth Test', async ({page}) => {
  // write your test here
  expect(false).toBeFalsy()
  expect(1).toBeGreaterThan(0)
  expect(1).toBeLessThan(2)
}
);