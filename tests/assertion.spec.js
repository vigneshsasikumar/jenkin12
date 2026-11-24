
import { test, expect } from '@playwright/test';

test.describe('Login Test Cases Using XPath', () => {

    // Test Case 1: Positive Login Test
    test('Positive Login Test', async ({ page }) => {

        await page.goto('https://practicetestautomation.com/practice-test-login/');

        await page.locator("//input[@id='username']").fill('student');

        await page.locator("//input[@id='password']").fill('Password123');

        await page.locator("//button[@id='submit']").click();

        await expect(page).toHaveURL(/practicetestautomation\.com\/logged-in-successfully\//);

        await expect(page.locator("//h1[contains(text(),'Logged In Successfully')]")).toBeVisible();

        await expect(page.locator("//a[text()='Log out']")).toBeVisible();

        await page.pause()

    });


    // Test Case 2: Negative Username Test
    test('Negative Username Test', async ({ page }) => {

        await page.goto('https://practicetestautomation.com/practice-test-login/');

        await page.locator("//input[@id='username']").fill('incorrectUser');

        await page.locator("//input[@id='password']").fill('Password123');

        await page.locator("//button[@id='submit']").click();

        await expect(page.locator("//div[@id='error']")).toBeVisible();

        await expect(page.locator("//div[@id='error']")).toHaveText('Your username is invalid!');

        await page.pause()
    });


    // Test Case 3: Negative Password Test
    test('Negative Password Test', async ({ page }) => {

        await page.goto('https://practicetestautomation.com/practice-test-login/');

        await page.locator("//input[@id='username']").fill('student');

        await page.locator("//input[@id='password']").fill('incorrectPassword');

        await page.locator("//button[@id='submit']").click();

        await expect(page.locator("//div[@id='error']")).toBeVisible();

        await expect(page.locator("//div[@id='error']")).toHaveText('Your password is invalid!');

        await page.pause()
    });

});
