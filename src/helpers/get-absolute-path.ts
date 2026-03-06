import * as path from 'path';
import * as process from 'process';

export function getAbsolutePath(fileName: string, cwd?: string): string {
  if (path.isAbsolute(fileName)) return path.normalize(fileName);
  return path.join(cwd ?? process.cwd(), fileName);
}
