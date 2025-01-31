import { test, expect } from "@playwright/test";

test("My third test", async ({ page }) => {
  await page.goto("https://www.google.pl");
  await expect(page).toHaveTitle("Google");
});
