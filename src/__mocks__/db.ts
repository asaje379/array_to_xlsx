import { DataSheets } from "./../interfaces";
export const simpleArr = [
  { name: "John DOE", age: 45, enabled: true },
  { name: "Jane XIE", age: 45, enabled: false },
];

export const multipleArr: DataSheets[] = [
  { name: "Feuille 1", data: simpleArr },
  { name: "Feuille 2", data: simpleArr },
  { name: "Feuille 3", data: simpleArr },
];
