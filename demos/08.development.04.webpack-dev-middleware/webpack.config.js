const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
// https://cnodejs.org/topic/57a409657a922d6f358cd22d
const env = process.env.NODE_ENV || 'production'

module.exports = {
  mode: env,
  devtool: 'inline-source-map',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'static/js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    // server contentBase path
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        title: 'Output Management',
        template: './src/template.html',
        ouput: '[name].html'
    }),
    new ManifestPlugin(),
    new webpack.HotModuleReplacementPlugin()
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
          {
            // documentation: https://github.com/webpack-contrib/file-loader
            loader: 'file-loader',
            options: {
              // by reg
              name: '[name].[ext]',
              // outputPath: 'imgs/',
              // filename: '[path][name].[ext]'
              // outpath relates to from output.path
              outputPath: (file) => {
                return `static/imgs/${file}`
              }
            }
          }
        ],
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  }
}
