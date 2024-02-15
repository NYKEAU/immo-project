import { test, expect } from '@playwright/test';

// Test if http code is 200
test('http status code', async ({ page }) => {
  const response = await page.goto('https://footer-setup--reliable-dolphin-fd976a.netlify.app/legal');
  expect(response?.status()).toBe(200);
});

// Test if page title is correct
test('page title', async ({ page }) => {
  await page.goto('https://footer-setup--reliable-dolphin-fd976a.netlify.app/legal');
  expect(await page.title()).toBe('Mentions Légales');
});

// Test if page has a form
test('page has a form', async ({ page }) => {
  await page.goto('https://footer-setup--reliable-dolphin-fd976a.netlify.app/legal');
  expect(await page.isVisible('form')).toBe(true);
});