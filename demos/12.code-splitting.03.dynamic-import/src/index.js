;(function() {
  function getComponent() {
    return import('lodash').then(({ default: _ }) => {
      var element = document.createElement('div');
      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
      return element;
      }).catch(error => 'An error occurred while loading the component');
  }

  getComponent().then(el => {
    console.log(el)
    document.body.appendChild(el)
  }).catch(e => {
    document.innerHTML = e
  })
})()