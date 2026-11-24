import {test,expect} from '@playwright/test'
import Swag from '../pages/saucedemo'
import cred from '../test-data/SL.json'

test("login swaglabs using pom pattern",async({page})=>{

    const SD=new Swag(page); //fixture

    await SD.navigation()
    await SD.login(cred.username,cred.password)

    await page.pause()


})
