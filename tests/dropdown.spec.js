import {test,expect} from '@playwright/test'
import { log } from 'console'

test("dropdown",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //await page.locator('//select[@id="country"]').selectOption("brazil")
    //await page.locator('//select[@id="country"]').selectOption({label:"Germany"})
    //await page.locator('//select[@id="country"]').selectOption({value:"uk"})
    await page.locator('//select[@id="country"]').selectOption({index:5})

    const ddCount=await page.locator('//select[@id="country"]/option')
    console.log("COUNT :", await ddCount.count());

    await expect(page.locator('//select[@id="country"]/option')).toHaveCount(10)
    
    const text=await page.locator('//select[@id="country"]').textContent()

    console.log(text.trim());

    //textcontent
    //alltextcontents
    //innertext
    //allinnertexts
    
    const textt=await page.locator('//select[@id="country"]/option').allTextContents()
    for(let i of textt){
        console.log(i.trim());
        
    }
    await page.pause()

})

test("Multi-select dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//select[@id="colors"]').selectOption(["Red","Yellow","White"])

    await page.pause()
})


test("fruit-select",async({page})=>{

    await page.goto("https://letcode.in/dropdowns")

    await page.locator('//select[@id="fruits"]').selectOption("Apple")
    await page.pause()

    await page.locator('//select[@id="superheros"]').selectOption(["The Avengers","Captain America","Iron Man"])
    await page.pause()

    await page.locator('//select[@id="lang"]').selectOption({index:3})
    await page.pause()

    await page.locator('//select[@id="country"]').selectOption({value:"India"})
    await page.pause()



})


test("googlee",async({page})=>{

    await page.goto("https://www.google.com/")
const googlee=await page.locator('//div[@id="SIvCob"]').allTextContents()
    for(let i of googlee){
        console.log(i.trim());
        
    }
    await page.pause()

})