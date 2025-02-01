import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page, expect } from "@playwright/test";

let browser: Browser;
let page: Page;

Given("I am on the conduit login page", async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto("https://conduit.bondaracademy.com/");
  await page.locator('//a[normalize-space()="Sign in"]').click();
});

When("I login with valid credrentials", async function () {
  await page
    .locator('//input[@placeholder="Email"]')
    .fill("miroslaw.dyduch@gmail.com");
  await page.locator('//input[@placeholder="Password"]').fill("dydko123");
  await page.locator('button[type="submit"]').click({ delay: 500 });
});

When("I click on the setting button", async function () {
  await page.locator(".ion-gear-a").click();
});

When("I click on the logout button", async function () {
  await page
    .locator('//button[normalize-space()="Or click here to logout."]')
    .click();
});

Then("I route back to the login page", async function () {
  await expect(page.locator('//a[normalize-space()="Sign in"]')).toBeVisible();
  await browser.close();
  console.log("I route back to the login page");
});
