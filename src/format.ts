export function reformatObject(
  data: Record<string, any>,
  result: Record<string, string> = {},
  $key: string = ""
) {
  for (const key in data) {
    if (typeof data[key] === "string") {
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

export function handleType(value: string | number | boolean) {
  if (typeof value === "boolean") {
    return value ? "1" : "0";
  }

  return typeof value === "number" ? "" + value : value;
}

export function handleObjectTypes(
  data: Record<string, string | number | boolean>[]
) {
  return data.map((item) => {
    const res: Record<string, string> = {};
    for (const attr in item) {
      res[attr] = handleType(item[attr]);
    }
    return res;
  });
}
