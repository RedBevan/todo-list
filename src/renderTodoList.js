function renderTodos() {
  let todos = [];

  const renderTodoList = () => {
    console.log("To do list rendered");
    console.log(todos);

    todoDiv.innerHTML = ""; // Clear current list of todos

    todos.forEach((todo, index) => {
      const newTodoItem = document.createElement("div");
      newTodoItem.className = "todo-card";
      newTodoItem.setAttribute("draggable", "true");
      newTodoItem.setAttribute("data-index", index);

      const todoContent = `<div class="todo">
      <p>${todo.text}</p>
        <input type="checkbox" id="checkbox-${todo.id}" ${
        todo.isComplete ? "checked" : ""
      }>
        <label for="checkbox-${todo.id}">Complete</label>
      </div>`;

      newTodoItem.innerHTML = todoContent;
      todoDiv.appendChild(newTodoItem);
    });
  };

  const getTodos = () => {
    return todos; // Function to get the reference to the todos array
  };

  return { renderTodoList, getTodos };
}

export default renderTodos;
