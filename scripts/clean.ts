import fsp from 'fs/promises';

await Promise.all([
  fsp.rm('dist', { recursive: true, force: true }),
  fsp.rm('dts-out', { recursive: true, force: true })
]);
