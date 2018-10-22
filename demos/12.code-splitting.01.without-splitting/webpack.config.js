const path = require('path')
const HTMlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    // without setting chunks for html-webpack-plugin, another is injected by default.
    another: './src/another-module.js'
  },
  output: {
    filename: 'static/js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HTMlWebpackPlugin({
      template: './src/index.html',
      hash: true,
      inject: 'body'
    })
  ],
  devServer: {
    contentBase: './dist',
    open: true
  }
}