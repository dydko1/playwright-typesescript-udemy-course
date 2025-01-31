import { test } from "@playwright/test";

test("Fill method", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");

  await page.locator("input[placeholder='Username']").fill("Admin");
  await page.locator("input[placeholder='Password']").fill("admin123");

  await page.close();
});

test("pressSequentially method2", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");

  await page
    .locator("input[placeholder='Username']")
    .pressSequentially("Admin");
  await page
    .locator("input[placeholder='Password']")
    .pressSequentially("admin123", { delay: 1000 });
  //await page.pause();
  await page.close();
});

test("Double click", async ({ page }) => {
  await page.goto("https://play1.automationcamp.ir/mouse_events.html");

  await page.locator("#click_area").dblclick();

  //await page.pause();
  await page.pause();
  await page.close();
});

test("Right click", async ({ page }) => {
  await page.goto("https://play1.automationcamp.ir/mouse_events.html");

  await page.locator("#click_area").click({ button: "left" });

  //await page.pause();
  await page.pause();
  await page.close();
});
