
const { test, expect } = require('@playwright/test');

test('SauceDemo Complete Shopping Automation', async ({ page }) => {

// STEP 1: LOGIN

await page.goto('https://www.saucedemo.com/');
await expect(page).toHaveTitle('Swag Labs'); // Verify website name
await page.locator('#user-name').fill('standard_user'); // Enter username and password
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click(); // Click Login
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); // Verify Products page
await expect(page.locator('.title')).toHaveText('Products');
await page.pause()

// STEP 2: SELECT PRODUCTS


await expect(page).toHaveURL(/inventory.html/); // Verify product page URL
await expect(page.locator('.inventory_item')).not.toHaveCount(0); // Verify product list is displayed
await page.locator('.product_sort_container').selectOption('lohi'); // Sort products by Low to High price
const product1 = page.locator('.inventory_item').filter({has: page.getByText('Sauce Labs Onesie', { exact: true })}); // Select first product by name
await product1.getByRole('button', { name: 'Add to cart' }).click();
const product2 = page.locator('.inventory_item').filter({has: page.getByText('Sauce Labs Bike Light', { exact: true })}); // Select second product by name
await product2.getByRole('button', { name: 'Add to cart' }).click();
await expect(page.locator('.shopping_cart_badge')).toHaveText('2'); // Verify cart badge displays 2
await page.pause()

    
// STEP 3: VERIFY SHOPPING CART

await page.locator('.shopping_cart_link').click();
await expect(page).toHaveURL(/cart.html/); // Verify cart page URL
await expect(page.locator('.cart_item')).toHaveCount(2); // Verify both products
await expect(page.locator('.cart_item').nth(0)).toContainText('Sauce Labs Onesie'); // Verify product names
await expect(page.locator('.cart_item').nth(1)).toContainText('Sauce Labs Bike Light');
await expect(page.locator('.cart_item').nth(0).locator('.inventory_item_price')).toHaveText('$7.99'); // Verify product prices
await expect(page.locator('.cart_item').nth(1).locator('.inventory_item_price')).toHaveText('$9.99');
await page.locator('#checkout').click(); // Click Checkout
await page.pause()

// STEP 4: ENTER CHECKOUT INFORMATION

await page.locator('#first-name').fill('Sandy');
await page.locator('#last-name').fill('Kumar');
await page.locator('#postal-code').fill('600001');
await page.locator('#continue').click(); // Click Continue
await page.pause()

// STEP 5: VERIFY CHECKOUT OVERVIEW

await expect(page).toHaveURL(/checkout-step-two.html/);
await expect(page.locator('.title')).toHaveText('Checkout: Overview');
await expect(page.locator('.summary_info')).toContainText('Payment Information'); // Verify payment information
await expect(page.locator('.summary_info')).toContainText('Shipping Information'); // Verify shipping information
await expect(page.locator('.summary_total_label')).toBeVisible(); // Verify total price
await expect(page.locator('.summary_total_label')).toContainText('$19.42');
await page.pause()

// STEP 6: CONFIRM ORDER

await page.locator('#finish').click();
await expect(page).toHaveURL(/checkout-complete.html/); // Verify order confirmation page
await expect(page.locator('.title')).toHaveText('Checkout: Complete!');
await expect(page.locator('.pony_express')).toBeVisible(); // Verify order success image
await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!'); // Verify success message
await page.locator('#back-to-products').click(); // Click Back Home
await expect(page).toHaveURL(/inventory.html/); // Verify Products page
await expect(page.locator('.title')).toHaveText('Products');
await page.pause()

// STEP 7: LOGOUT

await page.locator('#react-burger-menu-btn').click(); // Open menu
await page.locator('#logout_sidebar_link').click(); // Click Logout
await expect(page).toHaveURL('https://www.saucedemo.com/'); // Verify login page
await expect(page.locator('#login-button')).toBeVisible();
console.log('ALL TEST CASES PASSED SUCCESSFULLY!');
await page.pause()

});
