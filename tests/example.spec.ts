import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://gigle.shop/');
});


test.describe('Basic Gigle site test', () => {
  test('should navigate correctly', async ({ page }) => {
    // click first "Ominaisuudet" element
    await page.locator(':nth-match(:text("Ominaisuudet"), 1)').click();
    //check for correct content
    await expect(page.locator('text=Giglen avulla palvelet asiakkaita')).toContainText('Gigle integroituu saumattomasti');

  });
});
