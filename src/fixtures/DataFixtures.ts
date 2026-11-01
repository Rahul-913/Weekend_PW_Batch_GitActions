// import { test as baseTest } from '@playwright/test';
import { customtest } from './CustomFixtures';
import { CsvHelper } from '../utilities/CSVHelper';

type DataFixture = {
    testData: Record<string, string>[];
};

export const customDataTest = customtest.extend<DataFixture>({
    testData: async ({ }, use) => {
        const testData = CsvHelper.readCsv(
            './src/testdata/NegativeCredentials.csv'
        );
        await use(testData);
    },
});