# Output management

The documentation about this chapter: [https://webpack.js.org/guides/output-management/](https://webpack.js.org/guides/output-management/)

- clean-webpack-plugin

Enable you to clean up a or multiple folders with

```bash
npm install --save-dev clean-webpack-plugin

```

```javascript
 new CleanWebpackPlugin([folerpath1, folerpath2, ...]),

```

- html-webpack-plugin

For more information, please go to [https://github.com/jantimon/html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)

- The Manifest

You might be wondering how webpack and its plugins seem to "know" what files are being generated. **The answer is in the manifest that webpack keeps to track how all the modules map to the output bundles.** If you're interested in managing webpack's output in other ways, the manifest would be a good place to start.

The manifest data can be extracted into a json file for easy consumption using the **WebpackManifestPlugin**.

```javascript
const ManifestPlugin = require('webpack-manifest-plugin')

// some other codes
new ManifestPlugin()
```