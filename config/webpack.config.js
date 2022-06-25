import {merge} from 'webpack-merge';
import PATHS from './path.js';
import common from './webpack.common.js';

const config = (env, argv) => 
  merge(common, {
    entry: {
      index: `${PATHS.src}/index.js`,
      contentScript: `${PATHS.src}/contentScript.js`,
      background: `${PATHS.src}/background.js`,
    },
    devtool: argv.mode === 'production' ? false : 'source-map',
  });

export default config;