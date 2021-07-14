import './style.css';

const list = document.querySelector('ul');
list.addEventListener('click', (event) => {
  if (event.target.tagname === 'li') {
    event.target.classList.toggle('checked');
  }
}, false);
