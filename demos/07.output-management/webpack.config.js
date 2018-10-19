const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  mode: 'production',
  /*
    can be entry: {
      index: '.src/index.js'
    } 
    as print.js is imported in src/index.js
  */
  entry: {
    index: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // clean dist folder by CleanWebpackPlugin
    new CleanWebpackPlugin(['dist']),
    // inject js file automatically before </body> tag
    new HtmlWebpackPlugin({
        title: 'Output Management',
        template: './src/template.html',
        ouput: '[name].html'
    }),
    new ManifestPlugin()
    ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
        'file-loader'
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      }
    ]
  }
}
