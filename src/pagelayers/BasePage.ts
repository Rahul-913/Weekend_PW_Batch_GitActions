import { Page } from '@playwright/test'
export class BasePage {

    protected readonly page: Page; //gv

    constructor(page: Page) {
        this.page = page;
    }
}