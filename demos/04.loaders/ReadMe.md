# Loaders

The documentation of webpack loaders are [https://webpack.js.org/concepts/loaders](https://webpack.js.org/concepts/loaders) and [https://webpack.js.org/concepts/#loaders](https://webpack.js.org/concepts/#loaders).

Loaders are transformations that are applied on the source code of a module as webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.

## basic concepts

### Configuration

**module.rules** allows you to specify several loaders within your webpack configuration and **loaders are evaluated/executed from right to left.**

```javascript

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
};

```

## demos

- 01.basic

This demo is about how to import css file in a Javascript file. Through [01.basic](01.basic), you can have a basic understanding of how a loader works and what a loader is.
