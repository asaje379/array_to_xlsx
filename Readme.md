# aoo_to_xlsx

Convert an array of object to xlsx file.

## Installing

```bash
npm i aoo_to_xlsx
```

## Usage

```typescript
import { aoo_to_xlsx } from 'aoo_to_xlsx';
import { join } from 'path';
import { tmpdir } from 'os';
import { writeFileSync } from 'fs';

async function downloadXlsx(data: Record<string, string>[], name: string) {
  const buffer = await aoo_to_xlsx(data);
  const path = join(tmpdir(), `${name}.xlsx`);
  writeFileSync(path, Buffer.from(buffer));
}
```
