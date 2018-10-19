import './style.css';
import kido from './cat.jpg';
;(function() {
  oImg.src = kido
  oImg.onload = function() {
    console.log(this.src)
  }
  document.body.appendChild(oImg)
  console.log('hello, world')
})()

import './a.js'
import './b.js'
import './c.js'
