import { expect, test } from '@playwright/test';
import '../coverage.js';

test('Splash screen changes color on click', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await expect(page.locator('.splash-screen')).toHaveCSS(
    'color',
    'rgb(255, 255, 255)',
  );

  await page.click('.splash-screen h1');

  await expect(page.locator('.splash-screen')).toHaveCSS(
    'color',
    'rgb(255, 220, 0)',
  );
});
