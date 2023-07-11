import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  private page: Page;

  private dashboardLbl = "//h6[contains(.,'Dashboard')]";

  constructor(page: Page) {
    this.page = page;
  }

  public async dashboard() {
    await this.page.locator(this.dashboardLbl).waitFor({state:"visible"});
    return this.page.locator(this.dashboardLbl);
  }
}
