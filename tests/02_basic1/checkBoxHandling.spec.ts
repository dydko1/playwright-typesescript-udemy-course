import { test, expect } from "@playwright/test";

test("Checkbox handling", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  await page.getByRole("button", { name: "Consent", exact: true }).click();

  const cricketBox = page.locator("#checkbox1");
  const cricketBox2 = page.locator("#checkbox2");
  const cricketBox3 = page.locator("#checkbox3");
  await cricketBox.check();
  await cricketBox2.check();
  await cricketBox3.check();

  expect(await cricketBox.isChecked()).toBeTruthy();

  await page.pause();
  await page.close();
});
