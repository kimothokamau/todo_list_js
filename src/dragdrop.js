import { addTodo, todoslocal } from './data.js';

const dragstart = (element) => {
  element.classList.add('flying');
};

const dragover = (element, e) => {
  e.preventDefault();

  element.classList.add('dragover');
};

const dragleave = (element) => {
  element.classList.remove('dragover');
};

const drop = (element) => {
  const flying = document.querySelector('.flying');

  element.before(flying);

  const draggables = document.querySelectorAll('.draggable');

  let i = 0;
  draggables.forEach((draggable) => {
    draggable.setAttribute('todo', i);
    i += 1;
  });

  draggables.forEach((draggable) => {
    const description = draggable.getElementsByClassName('description')[0].textContent;
    const completed = draggable.getElementsByClassName('completed')[0].checked;
    const index = draggable.getAttribute('todo');

    addTodo(description, completed, index);
    todoslocal();
  });

  element.classList.remove('dragover');
};

const dragend = (element) => {
  element.classList.remove('flying');
};

export {
  dragstart, dragover, dragleave, drop, dragend,
};