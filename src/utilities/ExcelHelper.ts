import * as XLSX from 'xlsx'

export class ExcelHelper {
    static readExcel(filePath: string, sheetName: string) {
        const book = XLSX.readFile(filePath);
        const sheet = book.Sheets[sheetName || book.SheetNames[0]];
        return XLSX.utils.sheet_to_json<Record<string, string>>(sheet);

    }
}