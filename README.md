# Playwright Test Suite

This project is a **Playwright-driven test suite** designed to automate login and task verification for a demo application. The test suite uses **data-driven techniques** to minimize code duplication and improve scalability.

---

## Features

- **Data-Driven Testing**: Test cases are stored in a JSON file (`testData.json`), making it easy to add or modify test cases without changing the test script.
- **Cross-Browser Testing**: Playwright supports testing on multiple browsers (Chromium, Firefox, WebKit).
- **Scalable and Maintainable**: The test suite is designed to be easily extended with new test cases.

---

## Prerequisites

Before running the tests, ensure you have the following installed:

1. **Node.js**: Download and install Node.js from [nodejs.org](https://nodejs.org/).
2. **Playwright**: Install Playwright by running:
   ```bash
   npm install @playwright/test
   ```

## Setup & Run

1. Clone the repo:
   ```bash
   git clone https://github.com/armaancheema484/playwright-test-suite.git
   cd playwright-test-suite
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the tests:
   ```bash
   npx playwright test
   ```
   OR
   
   ```bash
   npx playwright test --debug
   ```
5. View the Test Report
   ```bash
   npx playwright show-report
   ```

