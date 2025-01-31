import { test, expect } from "@playwright/test";

test("web table handling", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = page.locator('table[name="BookTable"]');

  const coulumn = table.locator("tr th");
  console.log("column: " + (await coulumn.count()));

  const rows = table.locator("tbody tr");
  console.log("row: " + (await rows.count()));

  await page.pause();
  await page.close();
});

test("selecting single checkbox in the table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = page.locator("#productTable");
  const rows = table.locator("tbody tr");

  const marchedRowd = rows.filter({
    has: page.locator("td"),
    hasText: "Laptop",
  });

  await marchedRowd.locator("input").check();

  await page.pause();
  await page.close();
});

test("Printing all items from page 1", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = page.locator("#productTable");
  const rows = table.locator("tbody tr");

  const marchedRowd = rows.filter({
    has: page.locator("td"),
    hasText: "Laptop",
  });

  await marchedRowd.locator("input").check();
  await page.screenshot({ path: "screenshot.png" });

  await page.pause();
  await page.close();
});
