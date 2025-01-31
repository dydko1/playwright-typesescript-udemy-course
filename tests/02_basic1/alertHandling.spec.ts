import { test, expect } from "@playwright/test";

test("alert handling", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  await page.locator("text='Click for JS Alert'").click();
  await expect(
    page.locator("text='You successfully clicked an alert'")
  ).toBeVisible();

  await page.pause();
  await page.close();
});

test("confirm alert ok1", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.on("dialog", async (alert) => {
    const alertMessage = alert.message();
    await page.pause();
    expect(alertMessage).toEqual("I am a JS Confirm");
    await alert.accept();
  });

  //   await page.locator("text='Click for JS Alert'").click();
  //   await expect(
  //     page.locator("text='You successfully clicked an alert'")
  //   ).toBeVisible();

  await page.pause();
  await page.close();
});
