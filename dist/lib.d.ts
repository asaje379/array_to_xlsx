import { ConvertOptions, DataSheets, DefaultDataType } from './interfaces';
export declare function convertToSheet($data: Record<string, DefaultDataType>[], options?: ConvertOptions): Promise<void | import("exceljs").Buffer>;
export declare function convertToSheets($data: DataSheets[], options?: Omit<ConvertOptions, 'headers'>): Promise<void | import("exceljs").Buffer>;
