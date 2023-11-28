import renderTodos from "./renderTodoList.js";

const { renderTodoList, getTodos } = renderTodos(); // a concise way of saying, "Call the renderTodos function and give me the renderTodoList property from the result, and store it in a variable named renderTodoList."

function createtodo() {
  console.log("Nothing to do yet");

  let todos = getTodos(); // Get the reference to the todos array

  const addNewTodo = () => {
    let nameInput = document.getElementById("nameInput");
    console.log(nameInput.value);
    console.log("There's something to do!");
    if (nameInput.value.trim() !== "") {
      const todoName = nameInput.value;
      nameInput.value = "";

      const todoItemId = Date.now();

      const newTodoItem = {
        id: todoItemId,
        text: todoName,
        isComplete: false,
        inTrash: false,
      };

      todos.push(newTodoItem);
      localStorage.setItem("todos", JSON.stringify(todos));

      console.log(todos);
      renderTodoList();
    }
  };

  return { addNewTodo };
}

export default createtodo;
