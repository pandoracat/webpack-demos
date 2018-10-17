const path = require('path')

module.exports = {
  mode: 'production',
  // entry: './src/index.js' is shorthand for the following code
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}