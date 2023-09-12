export type DefaultDataType = string | number | boolean;

export interface ConvertOptions {
  headers?: Record<string, string>;
  filename?: string;
  path?: string;
  format?: 'xlsx' | 'csv';
}

export interface DataSheets {
  name: string;
  data: Record<string, DefaultDataType>[];
  config?: {
    options?: ConvertOptions;
  };
}
