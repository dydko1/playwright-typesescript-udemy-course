import { test, expect } from "@playwright/test";

test("test record", async ({ page, context }) => {
  await context.tracing.start({ snapshots: true, screenshots: true });

  await page.goto("https://www.wp.pl/");
  await page.getByRole("button", { name: "AKCEPTUJĘ I PRZECHODZĘ DO" }).click();
  await page.getByText("Przejdź teraz ›").click();
  await page.getByRole("link", { name: "Nagle podszedł Zełenski." }).click();
  await page.getByText("Przejdź teraz ›").click();
  await page.goto(
    "https://wiadomosci.wp.pl/zelenski-podszedl-ze-zniczem-wtedy-rozlegly-sie-brawa-7118843108666144a"
  );

  await context.tracing.stop({ path: "trace123.zip" });
});
