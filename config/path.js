import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const PATHS = {
  src: path.resolve(dirname, '../src'),
  build: path.resolve(dirname, '../build'),
};

export default PATHS;