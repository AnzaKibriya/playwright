import {expect, Locator, Page} from '@playwright/test';

export class CheckOutPage {
  readonly page: Page;
  readonly firstName;
  readonly lastName;
  readonly zipCode;
  readonly continueBtn;
  readonly itemName;
  readonly itemPrice;
  readonly finishBtn;
  readonly orderCompleteMessage;
  readonly backHomeBtn;
   
  constructor(page: Page) {
    this.page = page;
    this.firstName = this.page.getByPlaceholder("First Name");
    this.lastName = this.page.getByPlaceholder("Last Name");
    this.zipCode = this.page.getByPlaceholder("Zip/Postal Code");
    this.continueBtn = this.page.locator(`[data-test="continue"]`);
    this.itemName = this.page.locator(`[data-test="inventory-item-name"]`);
    this.itemPrice = this.page.locator(`[data-test="total-label"]`);
    this.finishBtn = this.page.locator(`[data-test="finish"]`);
    this.orderCompleteMessage = this.page.locator(`[data-test="complete-header"]`);
    this.backHomeBtn = this.page.locator(`[data-test="back-to-products"]`)

  }

  async checkoutInfo(firstName: string, lastName: string, zipCode: string) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.zipCode.fill(zipCode);
    await this.continueBtn.click();
  }

  async verifyInventoryName(inventoryName: string){
    await expect(this.itemName).toContainText(inventoryName);
  }

  async verifyInventoryPrice(inventoryPrice: string){
    await expect(this.itemPrice).toContainText(inventoryPrice);
  }

  async finishOrder(){
    await this.finishBtn.click();
  }

  async verifyOrderCompleteMessage(){
    await expect(this.orderCompleteMessage).toContainText('Thank you for your order!');
  }

  async clickBackHomeBtn(){
    await this.backHomeBtn.click();
  }

}
