
const { expect } = require('@playwright/test');

class CheckoutPage {

    constructor(page) {
        this.page = page;

        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');

        this.summaryInfo = page.locator('.summary_info');
        this.totalPrice = page.locator('.summary_total_label');

        this.finishButton = page.locator('#finish');

        this.completeTitle = page.locator('.title');
        this.successMessage = page.locator('.complete-header');
        this.successImage = page.locator('.pony_express');

        this.backHomeButton = page.locator('#back-to-products');
    }

    async enterInformation(first, last, postal) {
        await this.firstName.fill(first);
        await this.lastName.fill(last);
        await this.postalCode.fill(postal);

        await this.continueButton.click();
    }

    async verifyOverview() {
        await expect(this.page).toHaveURL(/checkout-step-two.html/);

        await expect(this.completeTitle)
            .toHaveText('Checkout: Overview');

        await expect(this.summaryInfo)
            .toContainText('Payment Information');

        await expect(this.summaryInfo)
            .toContainText('Shipping Information');

        await expect(this.totalPrice).toBeVisible();

        await expect(this.totalPrice).toContainText('$19.42');
    }

    async finishOrder() {
        await this.finishButton.click();
    }

    async verifyOrderSuccess() {
        await expect(this.page).toHaveURL(/checkout-complete.html/);

        await expect(this.completeTitle)
            .toHaveText('Checkout: Complete!');

        await expect(this.successImage).toBeVisible();

        await expect(this.successMessage)
            .toHaveText('Thank you for your order!');
    }

    async backHome() {
        await this.backHomeButton.click();
    }
}

module.exports = { CheckoutPage };
