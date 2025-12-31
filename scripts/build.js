import fs from 'fs';
import path from 'path';

const src = fs.readFileSync('src/index.js', 'utf8');

fs.mkdirSync('dist', { recursive: true });

// for esm
fs.writeFileSync('dist/index.mjs', src);

// for cjs
fs.writeFileSync(
  'dist/index.cjs',
  src.replace('export default', 'module.exports =')
);

console.log('Build complete');
