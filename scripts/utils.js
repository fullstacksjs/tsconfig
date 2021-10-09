const fs = require('fs/promises');
const path = require('path');

async function getConfigs(dir) {
  const files = await fs.readdir(dir);
  return files.map(file => path.resolve(process.cwd(), dir, file));
}

const getFileName = f => path.basename(f);

module.exports = {
  getConfigs,
  getFileName,
};
