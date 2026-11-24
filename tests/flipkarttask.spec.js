
import { test, expect } from '@playwright/test';

test('Select Best Seller mobile and Add to Compare', async ({ page }) => {

    await page.goto('https://www.flipkart.com/search?q=apple+mobile');

    // Find the product card containing Best Seller
    const bestSellerMobile = page.locator(
        "//*[contains(translate(normalize-space(.),'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'best seller')]/ancestor::div[.//a[contains(@href,'/p/')]][1]"
    );

    // Print the selected mobile name
    console.log(await bestSellerMobile.innerText());

    // Find Add to Compare inside that product card
    const compare = bestSellerMobile.getByText(
        'Add to Compare',
        { exact: true }
    );

    await compare.click();

});
