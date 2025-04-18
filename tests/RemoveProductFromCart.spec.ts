import { test, expect } from '../utils/fixture';

test.describe('Swag Labs Functional Tests', () => {
    
  test('Remove product from cart', async ({ loginPage, productPage, cartPage, landingPage, page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await landingPage.expectUrl('/inventory.html');
    await productPage.additemToCart('backpack');
    await productPage.goToCart();
    await landingPage.expectUrl('/cart.html');
    await cartPage.verifyPageTitle('Your Cart');
    await cartPage.removeitemFromCart('backpack');
    await cartPage.goBackToShopping();
    await landingPage.verifyLandingPage();
    await landingPage.expectUrl('/inventory.html');
  });
});