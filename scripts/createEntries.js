#!/usr/bin/env node

// @ts-check
import { readFile, stat, writeFile } from 'fs/promises';
import jsonc from 'jsonc-parser';
import { resolve } from 'path';

import baseConfig from './base.json' with { type: 'json' };
import { getConfigs, getFileName } from './utils.js';

async function createEntry(file) {
  const entryFile = await stat(file);
  if (!entryFile.isFile()) return;

  const config = await readFile(file, { encoding: 'utf-8' });
  const content = jsonc.parse(config);
  const { compilerOptions } = content;
  const dest = resolve(process.cwd(), getFileName(file));
  return writeFile(
    dest,
    JSON.stringify(
      {
        compilerOptions: {
          ...baseConfig,
          ...compilerOptions,
        },
      },
      null,
      2,
    ),
  );
}

async function createEntries() {
  const files = await getConfigs('configs');
  return Promise.all(files.map(createEntry));
}

createEntries().finally(() => {
  process.exit(0);
});
