function component() {
  const element = document.createElement('div');
  element.innerHTML = ('To DO List');

  return element;
}

document.body.appendChild(component());