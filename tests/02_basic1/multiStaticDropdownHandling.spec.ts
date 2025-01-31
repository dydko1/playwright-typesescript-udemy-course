import { test, epect } from "@playwright/test";

test("Multi static dropdown handling", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );

  await page.selectOption("#multi-select", [
    { index: 1 },
    { index: 2 },
    { index: 5 },
  ]);

  await page.pause();
  await page.close();
});
