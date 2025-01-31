import { test, expect } from "@playwright/test";

test("Dynamic dropdown handling 1", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  await page.getByRole("button", { name: "Consent", exact: true }).click();
  await page.locator('span[role="combobox"]').click();
  await page.locator('input[role="textbox"]').fill("India");
  await page.locator('span > ul[role="tree"]').click();

  await page.pause();
  await page.close();
});

test("Dynamic dropdown handling non search", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  await page.getByRole("button", { name: "Consent", exact: true }).click();

  await page.locator('span[role="combobox"]').click();
  await page.locator("span ul").locator("li", { hasText: "India" }).click();

  await page.pause();
  await page.close();
});
