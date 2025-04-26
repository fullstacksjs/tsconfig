#!/usr/bin/env node

// @ts-check
import { stat, unlink } from 'fs/promises';
import { resolve } from 'path';

import { getConfigs, getFileName } from './utils.js';

/**
 * @param {import("fs").PathLike} file
 */
async function removeEntry(file) {
  const entryFile = await stat(file);
  if (!entryFile.isFile()) return undefined;
  const dest = resolve(process.cwd(), getFileName(file));

  try {
    const destFile = await stat(dest);
    if (!destFile.isFile()) return;
    return unlink(dest);
  } catch (error) {
    console.error(`Error removing file: ${error.message}`);
    return undefined;
  }
}

async function removeEntries() {
  const configs = await getConfigs('configs');
  return Promise.all(configs.map(removeEntry));
}

removeEntries();
