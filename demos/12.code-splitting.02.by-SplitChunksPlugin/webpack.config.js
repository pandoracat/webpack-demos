const path = require('path')
const HTMlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    // without setting chunks for html-webpack-plugin, another is injected by default.
    another: './src/another-module.js',
    index: './src/index.js',
    libs: './src/libs'
  },
  output: {
    filename: 'static/js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new HTMlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    contentBase: './dist',
    open: true
  }
}