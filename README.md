# Cypress DemoQA Automation Framework 🚀

This project demonstrates an end-to-end automation framework built using **Cypress + JavaScript**, 
based on the [https://demoqa.com](https://demoqa.com) test site.

---

## 📦 Getting Started

### 1. Clone the repository

```
git clone https://github.com/Naveensirigiri/demoqa-cypress-framework.git
cd demoqa-cypress-framework
```

### 2. Install dependencies

Make sure you have **Node.js >= v14** installed.

```
npm install
```

Install Cypress
```
npm install cypress --save-dev
```

---

## ▶️ Running Tests

### To open Cypress Test Runner (GUI mode)

```
npx cypress open
```

Select `E2E Testing > Chrome or Electron` > Choose a spec to run.

### To run all tests in headless mode (CLI)

```
npx cypress run
```

---

## 📁 Folder Structure

```
cypress/
│
├── e2e/
│   ├── pages/                # Page Object files (e.g., PracticeFormPage.js, AlertsPage.js)
│ 
│
├── fixtures/                 # Static test data (optional)
├── support/
│   ├── commands.js           # Custom reusable Cypress commands
│   ├── e2e.js                # Global setup for all specs
│
cypress.config.js             # Cypress project configuration
```

---

## ✅ Test Scenarios Automated

- **Forms Page** – Dynamic data entry using Faker.js
- **Checkbox Page** – Multi-select and confirmation validation
- **Radio Buttons** – Selection and text confirmation
- **Alerts** – Standard, timer, confirm, and prompt alerts
- **Browser Windows** – New tab, new window, and message window (via stub)
- **Reusable utilities** – Custom commands and data generators

---

## 🔧 Commands & Utilities

- **Faker.js** used for generating dynamic, realistic test data.
- **Custom Commands** (`support/commands.js`) abstract complex steps.
- **Page Object Model** helps keep code modular and maintainable.

---

## 🧪 Run Specific Test

```
npx cypress run --spec "cypress/e2e/checkBoxTest.cy.js"
```

---

## 📬 Author

- 👤 Naveen Sirigiri – Senoir Automation QA | Playwright | Cypress | Selenium  
- 📧 sirigirinaveen@gmail.com

---
