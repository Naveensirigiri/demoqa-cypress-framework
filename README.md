# Cypress DemoQA Automation Framework 🚀

This project demonstrates an end-to-end automation framework built using **Cypress + JavaScript**, 
based on the [https://demoqa.com](https://demoqa.com) test site.

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/demoqa-cypress-framework.git
cd cypress_demoqa_automation
```

### 2. Install dependencies

Make sure you have **Node.js >= v14** installed.

```bash
npm install
```

---

## ▶️ Running Tests

### To open Cypress Test Runner (GUI mode)

```bash
npx cypress open
```

Select `E2E Testing > Chrome or Electron` > Choose a spec to run.

### To run all tests in headless mode (CLI)

```bash
npx cypress run
```

---

## 📁 Folder Structure

```
cypress/
│
├── e2e/
│   ├── pages/                # Page Object files (e.g., FormsPage.js, AlertsPage.js)
│   ├── tests/                # All test specs (e.g., formTest.spec.js)
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

```bash
npx cypress run --spec "cypress/e2e/tests/checkboxTest.spec.js"
```

---

## 💡 CI/CD Integration (Optional)

To run Cypress in CI pipelines (like GitHub Actions, GitLab CI):

```yaml
# Sample GitHub Action snippet
- name: Install dependencies
  run: npm install

- name: Run Cypress tests
  run: npx cypress run
```

---

## 🐞 Defect Reporting (Sample Format)

```text
❌ Defect: Calendar DOB selector picks wrong date
- Steps: Select '1990-04-05' as DOB in practice form
- Expected: Day '5' should be selected
- Actual: Day '4' gets selected
- Severity: Medium
```

---

---

## 📬 Author

- 👤 Naveen Sirigiri – Automation QA | Playwright | Cypress | Selenium  
- 📧 sirigirinaveen@gmail.com

---
