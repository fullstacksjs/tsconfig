#!/usr/bin/env node

const { getConfigs, getFileName } = require('./utils');
const fs = require('fs/promises');
const path = require('path');

async function removeEntiry(file) {
  const entryFile = await fs.stat(file);
  if (!entryFile.isFile()) return;
  const dest = path.resolve(process.cwd(), getFileName(file));
  return fs.unlink(dest);
}

async function removeEntries() {
  const configs = await getConfigs('configs');
  return Promise.all(configs.map(removeEntiry));
}

removeEntries();
