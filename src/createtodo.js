function createtodo() {
  console.log("Nothing to do yet");

  let todos = [];

  function addNewTodo() {
    console.log("There's something to do!");
  }

  // // Check if todos are in local storage
  // if (localStorage.getItem("todos")) {
  //   todos = JSON.parse(localStorage.getItem("todos"));
  //   renderTodoList();
  // }

  // const addNewTodo = () => {
  //   if (nameInput.value.trim() !== "") {
  //     const todoName = nameInput.value;
  //     nameInput.value = "";

  //     // Set todo ID to number of ms elapsed since the epoch. This ensures no two todos have the same ID.
  //     const todoItemId = Date.now();

  //     const newTodoItem = {
  //       id: todoItemId,
  //       name: todoName,
  //       isComplete: false,
  //     };

  //     todos.push(newTodoItem);
  //     localStorage.setItem("todos", JSON.stringify(todos));

  //     renderTodoList();
  //     updateItemsLeft();
  //   }
  // };

  return { addNewTodo };
}

export default createtodo;
