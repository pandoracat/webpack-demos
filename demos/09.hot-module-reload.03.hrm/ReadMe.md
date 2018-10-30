# about

For this example, I follow the guide at https://webpack.js.org/guides/hot-module-replacement.

I found it doesn't work for js file as my expectation that when I change *print.js* under *src* directory, webpage won't reload and update *print.js* silently at *http://localhost:8080*.

After searching many webpages, there is no solution. A possible solution I found by myself is opening webpage at *http://localhost:8080/webpack-dev-server*.

## Gotchas

```javascript
if(hot.module) {
  hot.module.accept('./print.js', function() {
    var elem = getComponent()
    document.body.removeChild(document.querySelector('div')
    // Rebinding event to oDiv to can avoid wihtout updating to the older even handler
    document.body.appendChild(elem)
  })
}
```

## HRM with Stlylesheets

*style-loader* supports hot-reload-replacement by default.