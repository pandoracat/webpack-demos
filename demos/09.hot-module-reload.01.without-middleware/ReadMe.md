# Hot module reload support without using dev-server-middleware

This feature is great for productivity. All we need to do is update our webpack-dev-server configuration, and use webpack's built in HMR plugin.

With *webpack-dev-server*, the configure is as following:

```javascript
const webpack = require('webpack')
module.exports = {
  devSever: {
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
```

With *hot-module-replacement* enabled, while a updating on depended js files reload webpages, updating *src/style.css** does not reload webpage.