const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'static/js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  //  plugins put at here
  plugins: [
    new HtmlWebpackPlugin({
      src: './src/template.html',
      title: 'html-webpack-plugin',
      inject: true
    })
  ]
}