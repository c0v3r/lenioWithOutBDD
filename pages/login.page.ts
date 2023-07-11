import { Page } from "@playwright/test";
import ENV from '../utils/env';

export class LoginPage {
  private page: Page;

  private usernameTxt = "input[name='username']"
  private passwordTxt = "//input[@name='password']";
  private signInbtn = "button:has-text('Login')";

  constructor(page: Page) {
    this.page = page;
  }

  public async goto(): Promise<void> {
    await this.page.goto(`${ENV.BASE_URL}`);
  }

  public async login(username: string, password: string): Promise<void> {
    await this.page.locator(this.usernameTxt).fill(`${ENV.USERNAME}`);
    await this.page.locator(this.passwordTxt).fill(`${ENV.PASSWORD}`);
    await this.page.locator(this.signInbtn).click();
  }
}
