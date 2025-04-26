import { readdir } from 'fs/promises';
import { basename, resolve } from 'path';

// @ts-check
export async function getConfigs(dir) {
  const files = await readdir(dir);
  return files.map(file => resolve(process.cwd(), dir, file));
}

export const getFileName = f => basename(f);
