const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      /*
      In order to import a CSS file from within a JavaScript module, you need to install and add the style-loader and css-loader to your module configuration:
      ```bash
      npm install --save-dev style-loader css-loader
      ```
      */
      {
        test: /\.css$/,
        use: [
          // generate a style tag that contains style of imported style code in <head> tag.
          'style-loader',
          // enable you to import css file in a javascript file.
          'css-loader'
        ]
      }
    ]
  }
}