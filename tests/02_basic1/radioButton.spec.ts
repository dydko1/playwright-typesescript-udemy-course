import { expect, test } from "@playwright/test";

test("Radio button handling", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  await page.getByRole("button", { name: "Consent", exact: true }).click();
  const female = page.locator('input[value="FeMale"]');
  const male = page.locator('input[value="Male"]');

  expect(female).not.toBeChecked();
  expect(male).not.toBeChecked();

  await male.check();
  expect(await male.isChecked()).toBeTruthy();

  //await page.pause();
  await page.close();
});
