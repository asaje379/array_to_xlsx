import { multipleArr, simpleArr } from '../__mocks__/db';
import { describe, it, expect } from '@jest/globals';
import { convertToSheet, convertToSheets } from '../lib';

describe('convert arr to xlsx file on sheet', () => {
  it('should convert empty array', async () => {
    const buffer = convertToSheet([], {
      filename: 'empty_arr',
    });
    expect(buffer).toBeDefined();
  });

  it('should convert non empty array', async () => {
    const buffer = convertToSheet(simpleArr, {
      filename: 'non_empty_arr',
    });
    expect(buffer).toBeDefined();
  });

  it('should convert non empty array with ; seperator', async () => {
    const buffer = convertToSheet(simpleArr, {
      filename: 'non_empty_arr_with_dot_coma',
      path: './src/__mocks__',
      options: {
        formatterOptions: {
          delimiter: ';',
        },
      },
      format: 'csv',
    });
    expect(buffer).toBeDefined();
  });

  it('should convert non empty array with headers', async () => {
    const buffer = convertToSheet(simpleArr, {
      filename: 'non_empty_arr_with_header',
      headers: { enabled: 'Actif', name: 'Nom', age: 'Age' },
    });
    expect(buffer).toBeDefined();
  });
});

describe('convert arr to xlsx file multiple sheets', () => {
  it('should convert non empty array', async () => {
    const buffer = convertToSheets(multipleArr, {
      filename: 'non_empty_mul_arr_with_header',
    });
    expect(buffer).toBeDefined();
  });
});

describe('convert arr to csv file on sheet', () => {
  it('should convert empty array', async () => {
    const buffer = convertToSheet([], {
      filename: 'empty_arr',
      format: 'csv',
      path: './src/__mocks__',
    });
    expect(buffer).toBeDefined();
  });

  it('should convert non empty array', async () => {
    const buffer = convertToSheet(simpleArr, {
      filename: 'non_empty_arr',
      format: 'csv',
      path: './src/__mocks__',
    });
    expect(buffer).toBeDefined();
  });

  it('should convert non empty array with headers', async () => {
    const buffer = convertToSheet(simpleArr, {
      filename: 'non_empty_arr_with_header',
      headers: { enabled: 'Actif', name: 'Nom', age: 'Age' },
      format: 'csv',
      path: './src/__mocks__',
    });
    expect(buffer).toBeDefined();
  });
});

describe('convert arr to xlsx file multiple sheets', () => {
  it('should convert non empty array', async () => {
    const buffer = convertToSheets(multipleArr, {
      filename: 'non_empty_mul_arr_with_header',
      format: 'csv',
      path: './src/__mocks__',
    });
    expect(buffer).toBeDefined();
  });
});
