const {test, expect} = require('playwright/test');

test('Wait for Load State', async ({page}) => {

    await page.goto('https://freelance-learn-automation.vercel.app/login'); 
    await page.getByName('New user? Signup').click();
    
    const count = await page.locator("//input[@type = 'checkbox']").count();

    expect(count).toBe(6);


});