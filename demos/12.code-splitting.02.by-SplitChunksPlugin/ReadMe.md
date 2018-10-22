# Code Splitting

Code splitting allows you to split your code into various bundles which can then be loaded on demand or in parallel.

There are three general approaches to code splitting available:

- Entry Points: Manually split code using entry configuration.
- Prevent Duplication: Use the SplitChunksPlugin to dedupe and split chunks.
- Dynamic Imports: Split code via inline function calls within modules.

## Prevent Duplication

The **SplitChunksPlugin** allows us to extract common dependencies into an existing entry chunk or an entirely new chunk.

```javascript

module.exports = {
  // ... other settings
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
```
