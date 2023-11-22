function createtodo() {
  console.log("Nothing to do yet");

  let todos = [];

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
      };

      todos.push(newTodoItem);
      localStorage.setItem("todos", JSON.stringify(todos));

      console.log(todos);
    }
  };

  return { addNewTodo };
}

export default createtodo;
