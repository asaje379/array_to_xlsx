import { Workbook } from 'exceljs';
import { handleObjectTypes, reformatAoo } from './format';
import { ConvertOptions, DataSheets, DefaultDataType } from './interfaces';
import { join } from 'path';

export async function convertToSheet(
  $data: Record<string, DefaultDataType>[],
  options?: ConvertOptions,
) {
  const data = reformatAoo(handleObjectTypes($data));
  const workbook = new Workbook();
  addSheet(workbook, {
    data,
    config: { options },
    name: options?.filename ?? 'Feuille',
  });

  const format = options?.format ?? 'xlsx';

  if (options?.path) {
    return await workbook[format].writeFile(
      join(options.path, `${options?.filename ?? 'result'}.${format}`),
    );
  }
  return await workbook[format].writeBuffer();
}

export async function convertToSheets(
  $data: DataSheets[],
  options?: Omit<ConvertOptions, 'headers'>,
) {
  const workbook = new Workbook();

  for (const item of $data) {
    addSheet(workbook, item);
  }

  const format = options?.format ?? 'xlsx';

  if (options?.path) {
    return await workbook[format].writeFile(
      join(options.path, `${options?.filename ?? 'result'}.${format}`),
    );
  }
  return await workbook[format].writeBuffer();
}

function addSheet(workbook: Workbook, item: DataSheets) {
  const sheet = workbook.addWorksheet(item.name);

  const cols = item.data.length === 0 ? [] : item.data[0];

  sheet.columns = Object.keys(cols).map((it: any) => ({
    header: item.config?.options?.headers
      ? it in item.config?.options?.headers
        ? item.config?.options?.headers[it]
        : it
      : it,
    key: it,
    width: 20,
  })) as any[];
  const data = reformatAoo(handleObjectTypes(item.data));
  sheet.addRows(data);
}
