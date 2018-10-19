# Hot module reload support without using dev-server-middleware

Setting is as following:

```javascript

module.exports = {
  // ... some other code
  devSever: {
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
```
