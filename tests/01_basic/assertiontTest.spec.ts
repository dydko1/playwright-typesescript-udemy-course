import { test, expect } from "@playwright/test";

test("Visible/hidden assertion", async ({ page }) => {
  await page.goto("https://sripriyakulkarni.com/");
  await page.locator("text='Automation Practice'").click();

  expect(page.locator("#displayed-text")).toBeVisible();

  await page.locator("#hide-textbox").click();
  await expect(page.locator("#displayed-text")).toBeHidden();
  //await page.pause();
  await page.close();
});

test("Visible/hidden assertion2", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
  await expect(page.locator(".added-manually")).not.toHaveCount(1);
  await page.locator("text=Add Element").click();
  await expect(page.locator(".added-manually")).toHaveCount(1);
  //await page.pause();
  await page.close();
});

test("Enable disable assertion", async ({ page }) => {
  await page.goto("https://letcode.in/buttons");
  await expect(page.locator("#property")).toBeEnabled();

  await expect(page.locator('[title="Disabled button"]')).toBeDisabled();

  //await page.pause();
  await page.close();
});

test("Text march or dismatch", async ({ page }) => {
  await page.goto("https://letcode.in/buttons");
  await expect(page.locator("#color")).toHaveText("What is my color?");
  await expect(page.locator("#color")).not.toHaveText("xxxWhat is my color?");
  //await page.pause();
  await page.close();
});

test("Attribute Assertion", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  await expect(page.locator("input[placeholder='Username']")).toHaveAttribute(
    "name",
    "username"
  );
  await expect(page.locator("input[placeholder='Username']")).toHaveAttribute(
    "class",
    /.*oxd-input/
  );
  await page.locator("input[placeholder='Username']").fill("admin123");
  //await page.pause();
  await page.close();
});

test("URL Assertion", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");

  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await expect(page).toHaveURL(/demo.orangehrmlive/);

  //await page.pause();
  await page.close();
});

test("Title Assertion", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");

  await expect(page).toHaveTitle("OrangeHRM");

  await expect(page).toHaveTitle(/.*HRM/);

  //await page.pause();
  await page.close();
});

test("Screenshot Assertion", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  await page.waitForTimeout(5000);
  await expect(page).toHaveScreenshot();
  await page.close();
});
