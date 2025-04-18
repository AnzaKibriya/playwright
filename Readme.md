# CoverGo Automation Assignment – Documentation

**Project:** Functional Testing of [Saucedemo](https://www.saucedemo.com)  
**Tools:** Playwright

## Project Structure
CoverGo_Assignment-AnzaKibriya/
├── node_modules/
├── pages/                    # Page Object Model (POM) layer
│   ├── CartPage.ts
│   ├── CheckOutPage.ts
│   ├── LandingPage.ts
│   ├── LoginPage.ts
│   ├── ProductPage.ts
├── playwright-report/        # Auto-generated test report folder
├── test-results/             # Test results folder
├── tests/                    # Test spec files
│   ├── AddProductToCart.spec.ts
│   ├── CheckOutProduct.spec.ts
│   ├── Login.spec.ts
│   ├── Logout.spec.ts
│   ├── NavigateToAboutPage.spec.ts
│   ├── ProvideCheckOutInfo.spec.ts
│   ├── RemoveProductFromCart.spec.ts
│   ├── VerifyOrderDetails.spec.ts
│   ├── VerifyOrderSuccessfullyPlace.spec.ts
├── utils/
│   └── fixture.ts            # Test fixtures & custom test logic
├── .gitignore
├── package.json
├── playwright.config.ts


## What This Project Does
Automates and verifies key user flows of https://www.saucedemo.com including:
✅ Login and Logout
🛒 Add/Remove Products from Cart
🧾 Checkout Process
✅ Navigation to About Page
📦 Final Order Placement & Verification

## Tech Stack
--Playwright (for end-to-end browser automation)
--TypeScript (strict typing and modern JavaScript features)
--Page Object Model (POM) for reusability and maintainability

## How to Run Tests
--Install Dependencies: npm install
--Run All Tests: npx playwright test
--Run Specific Test File: npx playwright test tests/AddProductToCart.spec.ts
--View HTML Report: npx playwright show-report

## Configuration
--Configured for chromium, firefox, and webkit
--Base URL: https://www.saucedemo.com
--Timeout: 30 seconds per test
--Reporter: html for easy test result viewing

## Test Coverage

**Test Case**                     | **File**
Login with valid credentials      | Login.spec.ts
Logout after login                | Logout.spec.ts
Add product(s) to cart            | AddProductToCart.spec.ts
Remove product(s) from cart       | RemoveProductFromCart.spec.ts
Provide checkout info             | ProvideCheckOutInfo.spec.ts
Complete checkout                 | CheckOutProduct.spec.ts
Verify order details              | VerifyOrderDetails.spec.ts
Verify order successfully placed  | VerifyOrderSuccessfullyPlace.spec.ts
Navigate to About page            | NavigateToAboutPage.spec.ts


## Best Practices Used
--POM (Page Object Model)
--Reusable locators and helper functions
--Explicit waits where needed
-- Fixtures
