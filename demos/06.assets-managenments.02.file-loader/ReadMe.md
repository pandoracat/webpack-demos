# Assets Management in webpack

The documentation about this chapter: https://webpack.js.org/guides/asset-management/

The *webpack.config.js* file in this folder contains:

- How to load an image in a javascript file
- How to load an image in a html file
- How to load an image in a css file
- How to load font in a css file

## Loading fonts, imgs in a javascript file

In order to import a CSS file from within a JavaScript module, you need to install and add the style-loader and css-loader to your module configuration:

```javascript
npm install --save-dev file-loader
```

- Sample 1:

Load an image in a javascript file:

```javascript
import kido from './img/cat.jpg'
;(function() {
  oImg.src = kido
  oImg.onload = function() {
    console.log(this.src)
  }
  document.body.appendChild(oImg)
  console.log('hello, world')
})()
```

For the above code, the image called *cat.jpg* will be processed and added to your output directory and the MyImage variable will contain the final url of that image after processing.

- Sample 2:

Load an image in a css file:

```css
.jpg-container {
  background: url('./src/cat.jpg');
}
```

When using the css-loader, as shown above, a similar process will occur for url('./cat.jpg') within your CSS. The loader will recognize this is a local file, and replace the './cat.jpg' path with the final path to the image in your output directory.

- Sample 3:

```html
<img class="html-loader-sample" src="./cat.jpg">
```

For more information about *html-loader*, please click (https://webpack.js.org/loaders/html-loader/)[https://webpack.js.org/loaders/html-loader/].
