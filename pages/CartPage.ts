import {expect, Locator, Page} from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly pageHeader : Locator
   
  constructor(page: Page) {
    this.page = page;
    this.pageHeader = this.page.locator(`[data-test="title"]`);
  }

  async removeitemFromCart(productName: string) {
    await this.page.locator(`[data-test="remove-sauce-labs-${productName}"]`).click();
  }

  async goBackToShopping() {
    await this.page.locator(`[data-test="continue-shopping"]`).click();
  }

  async checkOutProducts(){
    await this.page.locator(`[data-test="checkout"]`).click();
  }

  async verifyPageTitle(title: string){
    await expect(this.pageHeader).toContainText(title);
    await expect(this.pageHeader).toBeVisible();
  }
}
