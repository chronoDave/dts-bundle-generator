import * as fs from 'fs';
import * as path from 'path';

export function packageVersion(): string {
  let dirName = import.meta.dirname;
  while (dirName.length !== 0) {
    const packageJsonFilePath = path.join(dirName, 'package.json');
    if (fs.existsSync(packageJsonFilePath)) {
       
      return require(packageJsonFilePath).version as string;
    }

    dirName = path.join(dirName, '..');
  }

  throw new Error(`Cannot find up package.json in ${import.meta.dirname}`);
}
