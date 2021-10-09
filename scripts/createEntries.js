#!/usr/bin/env node

const fs = require('fs/promises');
const jsoncParser = require('jsonc-parser');
const path = require('path');
const { getConfigs, getFileName } = require('./utils');

async function createEntry(file) {
  const entryFile = await fs.stat(file);
  if (!entryFile.isFile()) return;

  const config = await fs.readFile(file, { encoding: 'utf-8' });
  const content = jsoncParser.parse(config);
  const { compilerOptions } = content;
  const dest = path.resolve(process.cwd(), getFileName(file));
  return fs.writeFile(dest, JSON.stringify({ compilerOptions }, {}, 2));
}

async function createEntries() {
  const files = await getConfigs('configs');
  return Promise.all(files.map(createEntry));
}

createEntries();
