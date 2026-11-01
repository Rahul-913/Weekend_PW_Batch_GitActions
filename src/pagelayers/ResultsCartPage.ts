import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ResultsCartPage extends BasePage {

    private readonly product: Locator;
    private readonly addTocart: Locator;
    private readonly goTocart: Locator;

    constructor(page: Page) {
        super(page);
        this.product = page.getByRole('img', { name: 'tshirts' });
        this.addTocart = page.getByRole('button', { name: 'add to cart' });
        this.goTocart = page.getByRole('link', { name: '1' });
    }

    async addToCart() {
        await this.product.click();
        await this.addTocart.click();
        await this.goTocart.click();
    }
}