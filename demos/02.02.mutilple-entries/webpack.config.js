const path = require('path')

module.exports = {
  mode: 'production',
  // We are telling webpack that we would like 3 separate dependency graphs
  /*
  In webpack version < 4 it was common to add vendors as separate entrypoint to compile
  it as separate file (in combination with the CommonsChunkPlugin). This is discouraged
   in webpack 4. Instead the optimization.splitChunks
option takes care of separating vendors and app modules and creating a separate file.*/
  entry: {
    page1: './src/pages/page1/entry.js',
    page2: './src/pages/page2/entry.js',
    page3: './src/pages/page3/entry.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}
