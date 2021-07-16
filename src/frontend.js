import {
  dragstart, dragover, dragleave, drop, dragend,
} from './dragdrop.js';
import completeTask from './data.js';

const displayTodos = (todos) => {
  const today = () => {
    const todayCont = document.createElement('li');
    todayCont.id = 'today-cont';

    const todayDesc = document.createElement('p');
    todayDesc.textContent = 'Todays ToDos';

    todayCont.appendChild(todayDesc);

    return todayCont;
  };

  const addTodo = () => {
    const newTodoCont = document.createElement('li');
    newTodoCont.id = 'newTodoCont';

    const todoText = document.createElement('input');
    todoText.type = 'text';
    todoText.placeholder = 'Add to your list...';
    todoText.className = 'todo-text';

    newTodoCont.appendChild(todoText);
    return newTodoCont;
  };

  const todoItem = (todo) => {
    const todoLi = document.createElement('li');
    todoLi.setAttribute('todo', todo.index);
    todoLi.draggable = 'true';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'completed';
    checkbox.classList.add('completed');
    checkbox.classList.add('checkbox');
    checkbox.addEventListener('click', () => completeTask(parseInt(checkbox.getAttribute('todo'), 10), checkbox.checked));

    const todoDesc = document.createElement('span');
    todoDesc.classList.add('description');
    todoDesc.textContent = todo.description;

    todoLi.appendChild(checkbox);
    todoLi.appendChild(todoDesc);

    todoLi.addEventListener('dragstart', () => dragstart(todoLi));

    todoLi.addEventListener('dragover', (e) => dragover(todoLi, e));

    todoLi.addEventListener('dragleave', () => dragleave(todoLi));

    todoLi.addEventListener('drop', () => {
      drop(todoLi);
    });

    todoLi.addEventListener('dragend', () => {
      dragend(todoLi);
    });

    return todoLi;
  };

  const ul = document.querySelector('ul');
  ul.appendChild(today());
  ul.appendChild(addTodo());

  todos.sort((a, b) => ((a.index > b.index) ? 1 : -1));
  todos.forEach((todo) => ul.appendChild(todoItem(todo)));
};

export default displayTodos;