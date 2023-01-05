"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reformatObject = exports.aoo_to_xlsx = void 0;
const exceljs_1 = require("exceljs");
function aoo_to_xlsx(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const workbook = new exceljs_1.Workbook();
        const sheet = workbook.addWorksheet('New sheet');
        const cols = data[0];
        sheet.columns = Object.keys(cols).map((it) => ({
            header: it,
            key: it,
            width: 20,
        }));
        sheet.addRows(data);
        return yield workbook.xlsx.writeBuffer();
    });
}
exports.aoo_to_xlsx = aoo_to_xlsx;
function reformatObject(data, result = {}, $key = '') {
    for (const key in data) {
        if (typeof data[key] === 'string') {
            result[$key + key] = data[key];
        }
        else {
            $key += `${key}.`;
            reformatObject(data[key], result, $key);
        }
    }
    return result;
}
exports.reformatObject = reformatObject;
console.log(reformatObject({
    a: '1',
    b: '2',
    c: { x: 'a', y: 'b', z: { p: 'pp', q: 'qq' } },
}));
//# sourceMappingURL=lib.js.map