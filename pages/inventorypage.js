
class InventoryPage {

    constructor(page) {
        this.page = page;

        this.title = page.locator('.title');
        this.products = page.locator('.inventory_item');
        this.sortDropdown = page.locator('.product_sort_container');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartLink = page.locator('.shopping_cart_link');
    }

    async sortLowToHigh() {
        await this.sortDropdown.selectOption('lohi');
    }

    async addProduct(productName) {
        const product = this.products.filter({
            has: this.page.getByText(productName, { exact: true })
        });

        await product.getByRole('button', {
            name: 'Add to cart'
        }).click();
    }

    async openCart() {
        await this.cartLink.click();
    }
}

module.exports = { InventoryPage };
