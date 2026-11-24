import{test,expect} from '@playwright/test'

import cred from '../test-data/swaglabs.json'

test.beforeAll("test started",()=>{
    console.log("test started successfully");
    
})

test.beforeEach("navigation",async({page})=>{
    await page.setViewportSize({width:375,height:667})
    await page.goto("https://www.saucedemo.com/")

})

test.afterEach("logout",async({page})=>{
    await page.locator('//button[@id="react-burger-menu-btn"]').click()
    await page.locator('//a[@id="logout_sidebar_link"]').click()
})

test.afterAll("test ended",()=>{
    console.log("test ended successfully");
    
})

test("login user one",async({page})=>{
    await page.locator('//input[@id="user-name"]').fill(cred.userOne)
    await page.locator('//input[@id="password"]').fill(cred.password)
    await page.locator('//input[@id="login-button"]').click()

})

test("login user two",async({page})=>{

    await page.locator('//input[@id="user-name"]').fill(cred.userTwo)
    await page.locator('//input[@id="password"]').fill(cred.password)
    await page.locator('//input[@id="login-button"]').click()

})

test("login user three",async({page})=>{

    await page.locator('//input[@id="user-name"]').fill(cred.userThree)
    await page.locator('//input[@id="password"]').fill(cred.password)
    await page.locator('//input[@id="login-button"]').click()
})

test("login user four",async({page})=>{
    await page.locator('//input[@id="user-name"]').fill(cred.userFour)
    await page.locator('//input[@id="password"]').fill(cred.password)
    await page.locator('//input[@id="login-button"]').click()
})