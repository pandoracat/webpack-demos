import './style.css';
import printMe from './print.js'

;(function() {
  function getComponent(str) {
    var oDiv = document.createElement('div')
    var oBtn = document.createElement('button')
    oDiv.innerHTML = '<p>hello, webpack</p>'

    oBtn.innerHTML = 'Click me to check the console'
    oBtn.onclick = printMe

    oDiv.appendChild(oBtn)

    return oDiv
  }

  document.body.appendChild(getComponent())
})()

if(module.hot) {
  module.hot.accept('./print.js', function() {
    printMe()
    document.body.removeChild(document.querySelector('div'))
    let elem = getComponent()
    document.body.appendChild(elem)
  })
}
