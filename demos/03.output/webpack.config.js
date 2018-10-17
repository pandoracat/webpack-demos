// document: https://webpack.js.org/concepts/output/
const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    app: './src/app.js'
  },
  output: {
    // For a config with mutiple entries, set filename as '[name].js'
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}
