# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTestCustomFix.spec.ts >> T3_ValidateLoginJSONFile-admin1_null
- Location: tests\LoginTestCustomFix.spec.ts:15:19

# Error details

```
Error: The username & password from JSON file is Null
```

# Test source

```ts
  1   | import process from 'node:process';
  2   | import { customDataTest } from '../src/fixtures/DataFixtures';
  3   | import { customtest } from '../src/fixtures/CustomFixtures';
  4   | import { CsvHelper } from '../src/utilities/CSVHelper';
  5   | import { ExcelHelper } from '../src/utilities/ExcelHelper';
  6   | import test from '@playwright/test';
  7   | import { CLIENT_RENEG_LIMIT } from 'node:tls';
  8   | import { JSONHelper } from '../src/utilities/JSONHelper';
  9   | 
  10  | 
  11  | let filepath = './src/testdata/credentials.json';
  12  | let jsonHelper = new JSONHelper();
  13  | let jsonData = jsonHelper.readJson(filepath);
  14  | for (const test1 of jsonData) {
  15  |     customDataTest(`T3_ValidateLoginJSONFile-${test1.username}_${test1.password}`, async ({ loginPage }) => {
  16  |         await loginPage.navigateToLoginPage();
  17  |         if (test1.username == null || test1.password == null) {
> 18  |             throw Error("The username & password from JSON file is Null");
      |                   ^ Error: The username & password from JSON file is Null
  19  |         }
  20  |         console.log(test1.username,test1.password);
  21  | 
  22  |         // await loginPage.doLogin(test1.username, test1.password);
  23  |     });
  24  | }
  25  | 
  26  | 
  27  | 
  28  | 
  29  | 
  30  | 
  31  | 
  32  | const path = './src/testdata/credentials.xlsx';
  33  | const data1 = ExcelHelper.readExcel(path, 'credentials');
  34  | for (const test1 of data1) {
  35  |     customDataTest(`T3_ValidateLoginExcelFile-${test1.username}_${test1.password}`, async ({ loginPage }) => {
  36  |         await loginPage.navigateToLoginPage();
  37  |         await loginPage.doLogin(test1.username, test1.password);
  38  |     });
  39  | }
  40  | 
  41  | 
  42  | 
  43  | 
  44  | 
  45  | 
  46  | 
  47  | 
  48  | const data = CsvHelper.readCsv('./src/testdata/NegativeCredentials.csv');
  49  | for (const test1 of data) {
  50  |     customDataTest(`T3_ValidateLoginCSVFileWOFixtures-${test1.username}_${test1.password}`, async ({ loginPage }) => {
  51  |         await loginPage.navigateToLoginPage();
  52  |         await loginPage.doLogin(test1.username, test1.password);
  53  |     }
  54  |     );
  55  | }
  56  | 
  57  | customDataTest('T3_ValidateLoginCSVFile', async ({ loginPage, testData }) => {
  58  |     for (const row of testData) {
  59  |         await loginPage.navigateToLoginPage();
  60  |         await loginPage.doLogin(row.username, row.password);
  61  |     }
  62  | });
  63  | 
  64  | 
  65  | 
  66  | 
  67  | 
  68  | 
  69  | 
  70  | 
  71  | 
  72  | customtest('T3_ValidateLoginEnvFile', async ({ loginPage }) => {
  73  |     await loginPage.navigateToLoginPage();
  74  |     await loginPage.doLogin(process.env.qaUsn!, process.env.qaPsw!);
  75  | });
  76  | 
  77  | 
  78  | 
  79  | 
  80  | 
  81  | customtest('T3_ValidateLoginHardCodedValues', async ({ loginPage }) => {
  82  |     await loginPage.navigateToLoginPage();
  83  |     await loginPage.doLogin("shopperplaywright@gmail.com", "PlayWright@34");
  84  | });
  85  | 
  86  | 
  87  | 
  88  | 
  89  | 
  90  | 
  91  | 
  92  | 
  93  | 
  94  | 
  95  | 
  96  | customtest('T1_ValidateTitle1', async ({ loginPage }) => {
  97  |     await loginPage.navigateToLoginPage();
  98  |     let title = await loginPage.fetchLoginPageTitle();
  99  |     console.log(title);
  100 | });
  101 | customtest('T2_ValidateURL', async ({ loginPage }) => {
  102 |     await loginPage.navigateToLoginPage();
  103 |     let URL = await loginPage.fetchLoginPageUrl();
  104 |     console.log(URL);
  105 | });
  106 | 
```