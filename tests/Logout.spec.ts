import { test, expect } from '../utils/fixture';

test.describe('Swag Labs Functional Tests', () => {

  test('Logout from sauce lab', async ({ loginPage, landingPage, page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await landingPage.expectUrl('/inventory.html');
    await landingPage.verifyLandingPage();
    await landingPage.openMenu();
    await landingPage.logout();
  });
});