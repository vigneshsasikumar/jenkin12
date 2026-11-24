import{test,expect} from '@playwright/test'

test("radio button",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    
    await page.locator('//input[@id="female"]').check()

    await expect(page.locator('//input[@id="female"]')).toBeChecked()
    
    await expect(page.locator('//input[@id="male"]')).not.toBeChecked()


    await page.pause()
})

test("checkbox", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//input[@id="monday"]').check()

    await expect(page.locator('//input[@id="monday"]')).toBeChecked()

    await page.pause()

})

