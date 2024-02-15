import { test, expect } from '@playwright/test';

// Test if http code is 200
test('http status code', async ({ page }) => {
  const response = await page.goto('http://localhost:3000/legal');
  expect(response?.status()).toBe(200);
});

// Test if page title is correct
test('page title', async ({ page }) => {
  await page.goto('http://localhost:3000/legal');
  expect(await page.title()).toBe('Mentions Légales');
});

// Test if page has a form
test('page has a form', async ({ page }) => {
  await page.goto('http://localhost:3000/legal');
  expect(await page.isVisible('form')).toBe(true);
});

// Test if we can submit the form
test('submit form', async ({ page }) => {
  await page.goto('http://localhost:3000/legal');
  await page.fill('input[name="name"]', 'John Doe');
  await page.fill('input[name="email"]', ' [email protected]');
  await page.fill('textarea[name="message"]', 'Hello World');
  await page.click('button[type="submit"]');
  expect(await page.isVisible('form')).toBe(true);
});