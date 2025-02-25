const { test, expect } = require("@playwright/test");

test("selecting an option from a dropdown", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/signup");
  await page.locator("#state").selectOption({ label: "Karnataka" });
  //   await page.waitForTimeout(3000);
  await page.locator("#state").selectOption({ value: "Delhi" });
  //   await page.waitForTimeout(3000);
  await page.locator("#state").selectOption({ index: 2 });
  //   await page.waitForTimeout(3000);
/*
  const allStateValues = await page.locator("#state").textContent(); // get all the values of the dropdown
  console.log(allStateValues);
  await expect(allStateValues.includes("Kerala")).toBeTruthy(); // check if the value is present in the dropdown
  await expect(allStateValues).toContain("Delhi"); // check if the value is present in the dropdown
  await expect(allStateValues).toContain("Karnataka"); // check if the value is present in the dropdown
*/
let state = await page.$("#state"); // get the dropdown element
let allStateValues = await state.$$("option");  // get all the values of the dropdown
let ddStatus = false;

for(let i=0;i<allStateValues.length;i++){
    let element = allStateValues[i];        // get the value of the dropdown
    let text = await element.textContent(); // get the text of the dropdown

    console.log("Value of all the states "+text);   // print the value of the dropdown

    if(text == "Uttar Pradesh"){    // check if the value is present in the dropdown
        ddStatus = true;            // set the status to true if the value is present in the dropdown
        break;                      // break the loop if the value is present in the dropdown
    }
    
    
    }
    await expect(ddStatus).toBeTruthy();      // check if the value is present in the dropdown
    await page.waitForTimeout(3000);
    //selecting multiple values from dropdown
    await page.locator("#hobbies").selectOption(['Playing','Swimming']);
    await page.waitForTimeout(3000);


});
