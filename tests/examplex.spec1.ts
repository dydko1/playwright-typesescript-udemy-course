import { test, expect } from "@playwright/test";
import { chromium } from "playwright";

test("basic test docker", async () => {
  const browser = await chromium.connect("ws://192.168.10.11:3000/");
  const page = await browser.newPage();

  await page.goto("https://playwright.dev/");
  await page.screenshot({ path: "screenshot.png", fullPage: true });
  await expect(page).toHaveTitle(/Playwright/);
  page.close();
});
