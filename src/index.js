/* eslint-disable no-plusplus */
import './style.css';
// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName('li');

for (let i = 0; myNodelist.length; i++) {
  const span = document.createElement('span');
  const txt = document.createTextNode(' ');
  span.className = 'close';
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Add a "checked" class when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', (event) => {
  if (event.target.tagname === 'li') {
    event.target.classList.toggle('checked');
  }
}, false);
