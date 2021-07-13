function component() {
  const element = document.createElement('div');
  element.innerHTML = ('To DO List JS');

  return element;
}

document.body.appendChild(component());