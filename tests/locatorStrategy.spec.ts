import { test } from "@playwright/test";

test("Different locator strategy", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.pause();
  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.locator("text=Login").click();
  console.log("ddddd");
});
