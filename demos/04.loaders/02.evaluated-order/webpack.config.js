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
  },
  // module.rules allows you to specify several loaders within your webpack configuration. 
  module: {
    rules: [
      {
        test: /\.scss$/,
        /*
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        */
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.css$/,
        /*
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        */
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  }
}