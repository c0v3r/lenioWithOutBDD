import { test, expect, Page } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { HomePage } from "../pages/home.page";
import * as user from "../data/testdata.json";

test.describe("Login Test Suite", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test("PageObject", async ({ page }) => {
    console.log(user);
    const loginpage = new LoginPage(page);
    const homepage = new HomePage(page);

    await loginpage.login(user.username);
    await (await homepage.dashboard()).waitFor({state:"visible"});
    await expect(await homepage.dashboard()).toBeVisible();
    await expect(await homepage.dashboard()).toContainText("Dashboard");
    await expect(await homepage.dashboard()).toHaveText("Dashboard");

    await page.waitForTimeout(3000);
  });
});
/*
test("PageObject2", async ({ page }) => {
  const loginpage = new LoginPage(page);
  const homepage = new HomePage(page);

  await loginpage.goto();
  //await page.waitForTimeout(7000);
  await loginpage.login("Admin", "admin123");
  await expect(homepage.dashboard()).toBeVisible()
  await expect(homepage.dashboard()).toContainText('Dashboard');
  await expect(homepage.dashboard()).toHaveText("Dashboard");
  await page.locator('.oxd-userdropdown-name').click();
  await page.locator('.oxd-userdropdown-name').click();
  await page.waitForTimeout(3000)
});

test("Combo", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/signup");

  await page.waitForTimeout(5000);
  await page.locator("#state").selectOption({ label: "Assam" });
  await page.waitForTimeout(5000);
});

test("webtable", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await selectProduct(page, 'Product 1');
});

test("dropdown", async ({ page }) => {
  await page.goto("https://webflow.com/made-in-webflow/dropdown");
  
  await page.waitForTimeout(2000);
  await page.locator('.css-kooqh4-control').click();
  await page.waitForTimeout(2000);
  await page.locator('//div[@id="react-select-2-option-1"]').click();
  await page.waitForTimeout(2000);
});

//await page.click('button', {timeout: 9000});




async function selectProduct(page: Page, expectedProduct: string) {
  for (let row = 1; row <= await page.locator("#productTable > tbody >tr").count(); row++) {
    console.log('indice: '+row);
    
    const actualProduct = await page.locator(`#productTable > tbody > tr:nth-child(${row}) > td:nth-child(2)`).innerHTML();
    
    if(actualProduct === expectedProduct){
      await page.locator(`#productTable > tbody > tr:nth-child(${row}) > td:nth-child(4) > input`).click();
      await page.screenshot({ path: 'screenshots/screenshot.png' , fullPage: true });
      break;
    }
  }
}*/
//npx playwright test -–headed

//allure
//https://www.lambdatest.com/learning-hub/playwright-reporting
//https://github.com/microsoft/playwright/issues/7034

//CI, docker, paralelismo, crossbrowsing, report, hooks, ddt, environments
//ddt, environments, report

/*
Llamar a porfidos
trsnaferir dolares
comprar materiales herrero + albanil
llamar al herrero*/
