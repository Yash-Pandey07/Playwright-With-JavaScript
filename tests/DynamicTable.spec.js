import {test, expect} from '@playwright/test';

test('Dynamic Table', async ({page}) => {

    page.goto('https://datatables.net/extensions/select/examples/checkbox/checkbox.html');
    await page.waitForTimeout(5000); // Wait for 5 seconds to ensure the page is fully loaded

    let row = await page.locator('table#example tr');

    row.locator('tr'); // Click on the first cell of the first row

})