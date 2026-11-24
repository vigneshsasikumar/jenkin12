import{test,expect} from '@playwright/test'
import { log } from 'console'

test("alert",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")


    page.on("dialog",async alert=>{

        console.log(alert.type());
        console.log(alert.message());

        expect(alert.message()).toBe("I am an alert box!")

        //expect(alert.message("I am an alert box!"))

        await alert.accept()
        
        
    })

    await page.locator('//button[@id="alertBtn"]').click()

    await page.waitForTimeout(3000)

})



test("confirm alert",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")


    page.on("dialog",async alert=>{

        console.log(alert.type());
        expect(alert.message()).toBe("Press a button!")

        //expect(alert.message("You pressed OK!"))

        //await alert.accept()
        await alert.dismiss()
    })

    await page.locator('//button[@id="confirmBtn"]').click()

    //await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed Ok!")

    await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed Cancel!")

    await page.waitForTimeout(3000)

})


test("prompt alert",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")


    page.on("dialog",async alert=>{

        console.log(alert.type());
        expect(alert.message()).toBe("Please enter your name:")

        //expect(alert.message("You pressed OK!"))

        // await alert.accept("Playwright")
        await alert.dismiss()
    })

    await page.locator('//button[@id="promptBtn"]').click()

    // await expect(page.locator('//p[@id="demo"]')).toHaveText("Hello Playwright! How are you today?")

    await expect(page.locator('//p[@id="demo"]')).toHaveText("User cancelled the prompt.")

    await page.waitForTimeout(3000)

})

test("simple alert",async({page})=>{

    await page.goto("https://letcode.in/alert")


    page.on("dialog",async alert=>{

        console.log(alert.type());
        console.log(alert.message());

        expect(alert.message()).toBe("Hey! Welcome to LetCode")

        //expect(alert.message("Hey! Welcome to LetCode"))

        await alert.accept()
        
        
    })

    await page.locator('//button[@id="accept"]').click()

    await page.waitForTimeout(3000)

})

test("confirmleet alert",async({page})=>{

    await page.goto("https://letcode.in/alert")


    page.on("dialog",async alert=>{

        console.log(alert.type());
        expect(alert.message()).toBe("Are you happy with LetCode?")

        //expect(alert.message("You pressed OK!"))

        await alert.accept()
        // await alert.dismiss()
    })

    await page.locator('//button[@id="confirm"]').click()

    await expect(page.locator('//div[@class="mt-3 text-xs text-slate-500"]')).toHaveText("User selected: OK (True)")

    // await expect(page.locator('//div[@class="mt-3 text-xs text-slate-500"]')).toHaveText("User selected: Cancel (False)")

    await page.waitForTimeout(3000)

})

test("promptleet alert",async({page})=>{

    await page.goto("https://letcode.in/alert")


    page.on("dialog",async alert=>{

        console.log(alert.type());
        expect(alert.message()).toBe("Enter your name")

        //expect(alert.message("You pressed OK!"))

        await alert.accept("vignesh")
        // await alert.dismiss()
    })

    await page.locator('//button[@id="prompt"]').click()

    await expect(page.locator('//p[@id="myName"]')).toHaveText("Your name is: vignesh")

    // await expect(page.locator('//p[@id="myName"]')).toHaveText("User cancelled the prompt.")

    await page.waitForTimeout(3000)

})

test("modernleet alert",async({page})=>{

    await page.goto("https://letcode.in/alert")


    page.on("dialog",async alert=>{

        console.log(alert.type());
        expect(alert.message()).toBe("Enter your name")

        //expect(alert.message("You pressed OK!"))

        await alert.accept("vignesh")
        // await alert.dismiss()
    })

    await page.locator('//button[@id="modern"]').click()

    await expect(page.locator('//p[@class="text-lg font-bold text-slate-800 dark:text-slate-100"]')).toHaveText("Modern Alert - Some people address me as sweet alert as well")

    // await expect(page.locator('//p[@id="myName"]')).toHaveText("User cancelled the prompt.")

    //div[@class="card"]

    await page.waitForTimeout(3000)

})