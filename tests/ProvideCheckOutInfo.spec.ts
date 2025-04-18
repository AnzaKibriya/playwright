import { test, expect } from '../utils/fixture';

test.describe('Swag Labs Functional Tests', () => {
    
  test('Provide info for checkout', async ({ loginPage, productPage, cartPage, checkOutPage, landingPage, page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await landingPage.expectUrl('/inventory.html');
    await productPage.additemToCart('backpack');
    await productPage.goToCart();
    await landingPage.expectUrl('/cart.html');
    await cartPage.verifyPageTitle('Your Cart');
    await cartPage.checkOutProducts(); 
    await landingPage.expectUrl('/checkout-step-one.html');
    await cartPage.verifyPageTitle('Checkout: Your Information');
    await checkOutPage.checkoutInfo('Test', 'User', '4500');
    await page.waitForTimeout(3000);
    await landingPage.expectUrl('/checkout-step-two.html');
    await cartPage.verifyPageTitle('Checkout: Overview');
  });
});