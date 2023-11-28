function renderTodos() {
  let todos = [];

  const renderTodoList = () => {
    console.log("To do list rendered");
    console.log(todos);

    todoDiv.innerHTML = ""; // Clear current list of todos

    todos.forEach((todo, index) => {
      const newTodoItem = document.createElement("div");
      newTodoItem.classList.add("todo-card");
      newTodoItem.setAttribute("draggable", "true");
      newTodoItem.setAttribute("data-index", index);

      // Check if the task is complete and add the 'completed' class
      if (todo.isComplete) {
        newTodoItem.classList.add("completed");
      }

      // Check if the task is inTrash and add the 'inTrash' class
      if (todo.inTrash) {
        newTodoItem.classList.add("inTrash");
      }

      const todoContent = `<div class="todo">
      <h2>${todo.text}</h2>
        <input type="checkbox" id="checkbox-${todo.id}" ${
        todo.isComplete ? "checked" : ""
      }>
        <label for="checkbox-${todo.id}">Complete</label>
        <button id="deleteBtn-${todo.id}" class="deleteBtn">Delete</button>
      </div>`;

      newTodoItem.innerHTML = todoContent;
      todoDiv.appendChild(newTodoItem);

      // Add event listener for checkbox change
      const checkbox = newTodoItem.querySelector(`#checkbox-${todo.id}`);
      checkbox.addEventListener("change", () => {
        // Update the isComplete property when the checkbox is checked/unchecked
        todos[index].isComplete = checkbox.checked;
        localStorage.setItem("todos", JSON.stringify(todos));

        // Re-render the todo list after updating isComplete
        renderTodoList();
      });
      // Add event listener for delete button
      const deleteBtn = newTodoItem.querySelector(`#deleteBtn-${todo.id}`);
      deleteBtn.addEventListener("click", () => {
        console.log("Delete button clicked");

        // Set inTrash property to true
        todos[index].inTrash = true;
        localStorage.setItem("todos", JSON.stringify(todos));

        // Re-render the todo list after updating inTrash
        renderTodoList();
      });
    });
  };

  const getTodos = () => {
    return todos; // Function to get the reference to the todos array
  };

  return { renderTodoList, getTodos };
}

export default renderTodos;
