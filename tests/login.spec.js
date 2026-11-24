import {test,expect} from '@playwright/test'

//test("page navigation",async({page})=>{
  //  await page.goto("https://www.facebook.com/");
//})

test("login using css",async({page})=>{
    await page.goto("https://www.facebook.com/");

    await page.locator('#_R_c9l6neappb6amH1_').fill("example@gmail.com");
    await page.locator('[name="pass"]').fill("password@123");

    await page.locator('[aria-label="Log in"]').click();

    await page.waitForTimeout(3000)
})


test("login using xpath", async ({ page }) => {
    await page.goto("https://www.timeanddate.com/calendar/");

    const elements = page.locator('//span[@class="co2" or @class="co1"]');

    await elements.first().waitFor();

    console.log("Number of elements:", await elements.count());

    await page.pause();
});
