// tests/Login.spec.ts
import { test, expect } from '../utils/fixture';

test.describe('Swag Labs Functional Tests', () => {

  test('Login with valid credentials', async ({ loginPage, landingPage, page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await landingPage.expectUrl('/inventory.html');
    await landingPage.verifyLandingPage();
  });
});
