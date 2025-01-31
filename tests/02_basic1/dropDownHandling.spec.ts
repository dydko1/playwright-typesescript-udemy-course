import { test, expect } from "@playwright/test";

test("Dropdown handling", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  await page.getByRole("button", { name: "Consent", exact: true }).click();

  await page.selectOption("#Skills", { value: "Android" });
  await page.pause();

  await page.selectOption("#Skills", { index: 2 });
  await page.pause();
  await page.close();
});
