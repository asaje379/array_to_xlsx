import { Workbook } from 'exceljs';

export async function aoo_to_xlsx($data: Record<string, string>[]) {
  const data = reformatAoo($data);
  const workbook = new Workbook();
  const sheet = workbook.addWorksheet('New sheet');
  const cols = data[0];
  sheet.columns = Object.keys(cols).map((it: any) => ({
    header: it,
    key: it,
    width: 20,
  })) as any[];
  sheet.addRows(data);

  return await workbook.xlsx.writeBuffer();
}

export function reformatObject(
  data: Record<string, any>,
  result: Record<string, string> = {},
  $key: string = ''
) {
  for (const key in data) {
    if (typeof data[key] === 'string') {
      result[$key + key] = data[key];
    } else {
      $key += `${key}.`;
      reformatObject(data[key], result, $key);
    }
  }
  return result;
}

export function reformatAoo(
  data: Record<string, any>[]
): Record<string, string>[] {
  return data.map((item) => reformatObject(item));
}
