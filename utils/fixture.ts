// tests/fixtures.ts
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckOutPage } from '../pages/CheckOutPage';
import { LandingPage } from '../pages/LandingPage';

type MyFixtures = {
  loginPage: LoginPage;
  productPage: ProductPage;
  cartPage: CartPage;
  checkOutPage : CheckOutPage;
  landingPage : LandingPage;
};

export const test = base.extend<MyFixtures>({

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await use(loginPage);
  },

  productPage: async ({ page }, use) => {
    const productPage = new ProductPage(page);
    await use(productPage);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },

  checkOutPage: async ({ page }, use) => {
    const checkOutPage = new CheckOutPage(page);
    await use(checkOutPage);
  },

  landingPage : async ({ page }, use) => {
    const landingPage = new LandingPage(page);
    await use(landingPage);
  },
});

export { expect } from '@playwright/test';
