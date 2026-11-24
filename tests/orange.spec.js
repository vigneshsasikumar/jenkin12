import {test,expect} from '@playwright/test'


test("login using css",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator('[name="username"]').fill("Admin");
    await page.locator('[name="password"]').fill("admin123");

    await page.locator('[type="submit"]').click();

    await page.waitForTimeout(3000)
})


//test.only("login using built-in locators",async({page})=> { //only=> annotation

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

await expect(page.getByAltText("company-branding")).toBeVisible();
// await expect(page.getByText("Login")).toBeVisible();

await expect(page.getByRole("heading", {name:"Login"})).toBeVisible();

await page.getByPlaceholder ("Username").fill("Admin");

await page.getByPlaceholder ("Password").fill("admin123");

await page.getByRole("button", {name:" Login"}).click();

await page.pause();

//})


//test("login using xpath",async({page})=>{

   // await page.goto("https://www.facebook.com/");

   // await page.locator('//input[@name="email"]').fill("sv123@gmail.com");

   // await page.locator('//input[@name="pass"]').fill("password")

  //  await page.locator('//div[@aria-label="Log in"]').click();

//    await page.pause()

//})


//span[@class="co2" or @class="co1"]


test("login using xpath", async ({ page }) => {
    await page.goto("https://www.timeanddate.com/calendar/");

    const elements = page.locator('//span[@class="co2" or @class="co1"]');

    await elements.first().waitFor();

    console.log("Number of elements:", await elements.count());

    await page.pause();
});

