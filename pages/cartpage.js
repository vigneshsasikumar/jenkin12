
class CartPage {

    constructor(page) {
        this.page = page;

        this.cartItems = page.locator('.cart_item');
        this.checkoutButton = page.locator('#checkout');
    }

    async verifyProductCount(count) {
        await expect(this.cartItems).toHaveCount(count);
    }

    async verifyProduct(index, name, price) {
        const item = this.cartItems.nth(index);

        await expect(item).toContainText(name);

        await expect(
            item.locator('.inventory_item_price')
        ).toHaveText(price);
    }

    async checkout() {
        await this.checkoutButton.click();
    }
}

const { expect } = require('@playwright/test');

module.exports = { CartPage };
