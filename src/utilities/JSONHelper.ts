import * as fs from 'fs';
import * as path from 'path';

export class JSONHelper {
    readJson(filepath: string): Record<string, string>[] {
        const fullPath = path.resolve(filepath);
        if (!fs.existsSync(fullPath)) {
            throw new Error(`JSON file not found: ${fullPath}`);
        }
        return JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
    }
}