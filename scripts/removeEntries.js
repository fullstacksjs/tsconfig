#!/usr/bin/env node

const { getConfigs, getFileName } = require('./utils');
const fs = require('fs/promises');
const path = require('path');

async function removeEntry(file) {
  const entryFile = await fs.stat(file);
  if (!entryFile.isFile()) return undefined;
  const dest = path.resolve(process.cwd(), getFileName(file));

  try {
    const destFile = await fs.stat(dest);
    if (!destFile.isFile()) return;
    return fs.unlink(dest);
  } catch {
    return undefined;
  }
}

async function removeEntries() {
  const configs = await getConfigs('configs');
  return Promise.all(configs.map(removeEntry));
}

removeEntries();
