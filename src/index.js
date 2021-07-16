import './style.css';
import displayTodos from './frontend';
import {todos} from './data';

const todoapp = () => {
  let todo_from_ls = JSON.parse(localStorage.getItem('todos'));

  if (todo_from_ls === null) {
    todo_from_ls = todos;
  }
  displayTodos(todos);
};

todoapp();