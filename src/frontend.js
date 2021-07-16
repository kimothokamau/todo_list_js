const displayTodos = (todos) => {
  const today = () => {
    const today_cont = document.createElement('li');
    today_cont.id = 'today-cont';

    const today_desc = document.createElement('p');
    today_desc.textContent = 'Todays ToDos';

    // const sync = document.createElement()

    today_cont.appendChild(today_desc);

    return today_cont;
  };

  const add_todo = () => {
    const new_todo_cont = document.createElement('li');
    new_todo_cont.id = "new_todo_cont";

    const todo_text = document.createElement('input');
    todo_text.type = 'text';
    todo_text.placeholder = 'Add to your list...';
    todo_text.id = "todo-text";

    new_todo_cont.appendChild(todo_text);
    return new_todo_cont;

  };

  const todo_item = (todo) => {
    const todo_li = document.createElement('li');
    todo_li.setAttribute('todo', todo.index);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'completed';
    checkbox.classList.add('completed');

    const todo_desc = document.createElement('span');
    todo_desc.classList.add('description');
    todo_desc.textContent = todo.description;

    todo_li.appendChild(checkbox);
    todo_li.appendChild(todo_desc);


    return todo_li;

  }

  const ul = document.querySelector('ul')
  ul.appendChild(today());
  ul.appendChild(add_todo());

  todos.sort((a, b) => ((a.index > b.index) ? 1 : -1));
  todos.forEach((todo) => ul.appendChild(todo_item(todo)));

}

export default displayTodos;