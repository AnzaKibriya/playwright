// pages/ProductPage.ts
import {expect, Locator, Page} from '@playwright/test';

export class ProductPage {
  readonly page: Page;
   readonly item: Locator
    readonly addToCartButton: Locator  

  constructor(page: Page) {
    this.page = page;
    this.item =  this.page.getByTestId('add-to-cart-sauce-labs-${itemId}');
    this.addToCartButton = this.page.getByTestId('shopping-cart-link');
  }

  async additemToCart(productName: string) {
    await this.page.locator(`[data-test="add-to-cart-sauce-labs-${productName}"]`).click();
  }

  async goToCart() {
    await this.page.locator(`[data-test="shopping-cart-link"]`).click();
  }
}
