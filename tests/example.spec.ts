import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.locator("text=Get Started").click();
  await expect(page).toHaveTitle(/Installation | Playwright/);
  await page.close();
});
