
# 🧪 Playwright + TypeScript Automation Framework

This project is an end-to-end UI test automation framework built with [Playwright](https://playwright.dev/) and TypeScript. It automates various user flows on [SauceDemo](https://www.saucedemo.com/), a demo e-commerce application.

---

## 📁 Project Structure

```
PlaywrightAgain/
├── node_modules/
├── pages/
│   ├── CartPage.ts
│   ├── CheckOutPage.ts
│   ├── LandingPage.ts
│   ├── LoginPage.ts
│   ├── ProductPage.ts
├── playwright-report/
├── test-results/
├── tests/
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
│   └── fixture.ts
├── .gitignore
├── package.json
├── playwright.config.ts
```

---

## 🔧 Installation

```bash
npm install
```

---

## 🚀 Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run a Specific Test
```bash
npx playwright test tests/AddProductToCart.spec.ts
```

---

## 📊 View HTML Report

```bash
npx playwright show-report
```

---

## 🧩 Features Covered

- Login & Logout flow
- Product selection
- Cart management
- Checkout flow
- Order verification
- Navigation testing

---

## 🛠 Tech Stack

- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- Node.js

---

## 📂 Pages and Tests

All tests follow the **Page Object Model** structure for maintainability and reuse.

---

## ✍️ Author

Anza Kibriya
