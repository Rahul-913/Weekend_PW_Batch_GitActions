import process from 'node:process';
import { customDataTest } from '../src/fixtures/DataFixtures';
import { customtest } from '../src/fixtures/CustomFixtures';
import { CsvHelper } from '../src/utilities/CSVHelper';
import { ExcelHelper } from '../src/utilities/ExcelHelper';
import { JSONHelper } from '../src/utilities/JSONHelper';


let filepath = './src/testdata/credentials.json';
const jsonHelper = new JSONHelper();
let jsonData = jsonHelper.readJson(filepath);
for (const test1 of jsonData) {
    customDataTest(`T3_ValidateLoginJSONFile-${test1.username}_${test1.password}`
        , async ({ loginPage }) => {
            await loginPage.navigateToLoginPage();
            if (test1.username == null || test1.password == null) {
                throw Error("The username & password from JSON file is Null");
            }
            console.log(test1.username, test1.password);
            await loginPage.doLogin(test1.username, test1.password);
        });
}







const path = './src/testdata/credentials.xlsx';
const data1 = ExcelHelper.readExcel(path, 'credentials');
for (const test1 of data1) {
    customDataTest(`T3_ValidateLoginExcelFile-${test1.username}_${test1.password}`, async ({ loginPage }) => {
        await loginPage.navigateToLoginPage();
        await loginPage.doLogin(test1.username, test1.password);
    });
}








const data = CsvHelper.readCsv('./src/testdata/NegativeCredentials.csv');
for (const test1 of data) {
    customDataTest(`T3_ValidateLoginCSVFileWOFixtures-${test1.username}_${test1.password}`, async ({ loginPage }) => {
        await loginPage.navigateToLoginPage();
        await loginPage.doLogin(test1.username, test1.password);
    }
    );
}

customDataTest('T3_ValidateLoginCSVFile', async ({ loginPage, testData }) => {
    for (const row of testData) {
        await loginPage.navigateToLoginPage();
        await loginPage.doLogin(row.username, row.password);
    }
});









customtest('T3_ValidateLoginEnvFile', async ({ loginPage }) => {
    await loginPage.navigateToLoginPage();
    await loginPage.doLogin(process.env.qaUsn!, process.env.qaPsw!);
});





customtest('T3_ValidateLoginHardCodedValues', async ({ loginPage }) => {
    await loginPage.navigateToLoginPage();
    await loginPage.doLogin("shopperplaywright@gmail.com", "PlayWright@34");
});











customtest('T1_ValidateTitle1', async ({ loginPage }) => {
    await loginPage.navigateToLoginPage();
    let title = await loginPage.fetchLoginPageTitle();
    console.log(title);
});
customtest('T2_ValidateURL', async ({ loginPage }) => {
    await loginPage.navigateToLoginPage();
    let URL = await loginPage.fetchLoginPageUrl();
    console.log(URL);
});
