# aoo_to_xlsx

Convert an array of object to xlsx file.

## Installing

```bash
npm i aoo_to_xlsx
```

## Usage

### convertToSheet

> Convert array to single sheet excel file

#### Prototype
```typescript
convertToSheet($data: Record<string, DefaultDataType>[], options?: ConvertOptions): Promise<void | import("exceljs").Buffer>
```

```typescript
import { convertToSheet } from 'aoo_to_xlsx'

convertToSheet([
  { name: "John DOE", age: 45, enabled: true },
  { name: "Jane XIE", age: 45, enabled: false },
], {
  filename: "non_empty_arr",
});
```

## Interfaces

### DefaultDataType
```typescript
type DefaultDataType = string | number | boolean;
```

### ConvertOptions
```typescript
interface ConvertOptions {
  headers?: Record<string, string>;

  // If it's defined, the function will genera
  filename?: string;
  path?: string;
}
```
