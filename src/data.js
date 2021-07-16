const todos = [
  { description: 'read es6 arrow functions', completed: false, index: 1 },
  { description: 'read on dom events', completed: false, index: 2 },
  { description: 'practice dom manipulation', completed: false, index: 3 },

];

const todoslocal = (todos) => {
  const todosJson = JSON.stringify(todos);
  localStorage.setItem('todos', todosJson);
};

const addTodo = (description, completed, index) => {
  todos.push({ description, completed, index: parseInt(index, 10) });
};

const completeTask = (index, check) => {
  const taskInTasks = todos.find((t) => t.index === index);

  taskInTasks.completed = check;
  todoslocal();
};

export {
  todos, todoslocal, addTodo, completeTask,
};
