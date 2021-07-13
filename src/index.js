function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = ('To DO List');

  return element;
}

document.body.appendChild(component());