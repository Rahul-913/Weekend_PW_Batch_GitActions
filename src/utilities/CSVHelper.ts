import * as fs from 'fs';//filesystem
import { parse } from 'csv-parse/sync';


export class CsvHelper {
    static readCsv(filePath: string): Record<string, string>[] {
        let fileContent = fs.readFileSync(filePath, 'utf-8');

        return parse(fileContent,{
            columns: true,//skip the first row as headings
            skip_empty_lines: true,
            trim: true,
        }) as Record<string, string>[];
    }
}