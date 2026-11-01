# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTestCustomFix.spec.ts >> T3_ValidateLoginExcelFile-user_user123
- Location: tests\LoginTestCustomFix.spec.ts:13:23

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://shoppersstack.com/user-signin
Call log:
  - navigating to "https://shoppersstack.com/user-signin", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e5]:
    - heading "Press space to play" [level=1] [ref=e6]
    - generic [ref=e7]:
      - paragraph [ref=e8]: "Try:"
      - list [ref=e9]:
        - listitem [ref=e10]: Checking the network cables, modem, and router
        - listitem [ref=e11]: Reconnecting to Wi-Fi
        - listitem [ref=e12]:
          - link "Running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e14]: ERR_INTERNET_DISCONNECTED
  - application "Dino game, press space to play" [ref=e16]
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | import { BasePage } from "./BasePage";
  3  | 
  4  | export class LoginPage extends BasePage {
  5  |     //Declaration-Locators
  6  |     private readonly usnTf: Locator;
  7  |     private readonly pswTf: Locator;
  8  |     private readonly loginBtn: Locator;
  9  | 
  10 |     //Initialization
  11 |     constructor(page: Page) {
  12 |         super(page);
  13 |         this.usnTf = page.getByRole('textbox', { name: 'Email' });
  14 |         // this.usnTf = page.locator("//input[@id='Email']");
  15 |         this.pswTf = page.getByRole('textbox', { name: 'Password' });
  16 |         this.loginBtn = page.getByRole('button', { name: 'Login' });
  17 |     }
  18 | 
  19 |     //Utilization - page/element action methods
  20 |     async navigateToLoginPage(): Promise<void> {
> 21 |         await this.page.goto('/user-signin');
     |                         ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://shoppersstack.com/user-signin
  22 |     }
  23 | 
  24 |     async fetchLoginPageUrl(): Promise<string> {
  25 |         let loginPageURL = this.page.url();
  26 |         console.log(`The login page url is ${loginPageURL}`);
  27 |         return loginPageURL;
  28 |     }
  29 | 
  30 |     async fetchLoginPageTitle(): Promise<string> {
  31 |         let loginPageTitle = await this.page.title();
  32 |         console.log(`The loginPageTitle is ${loginPageTitle}`);
  33 |         return loginPageTitle;
  34 |     }
  35 | 
  36 |     async doLogin(usn: string, psw: string): Promise<void> {
  37 |         await this.usnTf.waitFor({ state: 'visible' });
  38 |         await this.usnTf.fill(usn);
  39 |         await this.pswTf.waitFor({ state: 'visible' });
  40 |         await this.pswTf.fill(psw);
  41 |         await this.loginBtn.click();
  42 |         await this.page.screenshot({ path: "./Screenshots/HomePage.png" });
  43 |     }
  44 | 
  45 | 
  46 | 
  47 | 
  48 | 
  49 | }
```