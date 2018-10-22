const path = require('path')
const HTMlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: 'static/js/[name].bundle.js',
    chunkFilename: 'static/js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
    open: true
  },
  plugins: [
    new HTMlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
