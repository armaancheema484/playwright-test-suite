import { test, expect, Page } from '@playwright/test';
import testData from '../testData.json';

const DEMO_APP_URL = 'https://animated-gingersnap-8cf7f2.netlify.app/';
const EMAIL = 'admin';
const PASSWORD = 'password123';

test.beforeEach(async ({ page }) => {
  await page.goto(DEMO_APP_URL);
  //await page.fill('input[name="username"]', EMAIL);
  await page.fill('#username', EMAIL);
  await page.fill('#password', PASSWORD);
  await page.click('button[type="submit"]');
  //await page.waitForNavigation();
  await page.waitForLoadState('networkidle');
});

testData.testCases.forEach((testCase) => {
  test(testCase.name, async ({ page }) => {
    // Navigate to the specified application
    await page.click(`text=${testCase.application}`);

    // Verify the task is in the correct column
    const taskLocator = page.locator(`text=${testCase.task}`);
    await expect(taskLocator).toBeVisible();
    const columnLocator = page.locator(`text=${testCase.column}`).first();
    //
    await taskLocator.scrollIntoViewIfNeeded(); // Scroll the element into view
    await expect(taskLocator).toBeInViewport({ ratio: 0.5, timeout: 5000});

    // Verify the tags
    for (const tag of testCase.tags) {
      const tagLocator = page.locator(`text=${tag}`).first();
      await expect(tagLocator).toBeVisible();
    }
  });
});