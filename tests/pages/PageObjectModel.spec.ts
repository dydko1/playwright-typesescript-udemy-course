import { test, expect } from "@playwright/test";
import { LandingPage } from "./landingPage";
import { HomePage } from "./homePage";
import { SignInPage } from "./signinPage";
import { SettingsPage } from "./settingsPage";

test("Login Conduit test using POM", async ({ page }) => {
  const landingPage = new LandingPage(page);
  const signInPage = new SignInPage(page);
  const homePage = new HomePage(page);
  const settingsPage = new SettingsPage(page);

  await landingPage.navigateTo("https://conduit.bondaracademy.com/");
  await landingPage.clickSignInButton();
  await signInPage.enterEmailId("miroslaw.dyduch@gmail.com");
  await signInPage.enterPassword("dydko1x2x3");
  await signInPage.clickSignInButton();
  await homePage.clickSettingsButton();
  await settingsPage.clickLogoutButton();
  await page.close();
});
