import estrellaIcon from "/home/joe/repos/todo-list/src/assets/images/estrella-white.png";
import createtodo from "./createtodo.js";

const { addNewTodo } = createtodo();

function pageLoad() {
  // Select content div
  const content = document.querySelector("#content");

  const containerDiv = document.createElement("div");
  containerDiv.setAttribute("id", "containerDiv");
  content.appendChild(containerDiv);

  const headerDiv = document.createElement("div");
  headerDiv.setAttribute("id", "headerDiv");
  containerDiv.appendChild(headerDiv);

  const headerWrapper = document.createElement("div");
  headerWrapper.setAttribute("id", "headerWrapper");
  headerDiv.appendChild(headerWrapper);

  // Add estrella logo
  const estrellaLogo = new Image();
  estrellaLogo.setAttribute("id", "estrallaLogo");
  estrellaLogo.src = estrellaIcon;
  headerWrapper.appendChild(estrellaLogo);

  const pageHeader = document.createElement("p");
  pageHeader.setAttribute("id", "pageHeader");
  headerWrapper.appendChild(pageHeader);
  pageHeader.textContent = "TaskNinja";

  const toolbarDiv = document.createElement("div");
  toolbarDiv.setAttribute("id", "toolbarDiv");
  containerDiv.appendChild(toolbarDiv);

  const newTodoBtn = document.createElement("button");
  newTodoBtn.setAttribute("id", "newTodoBtn");
  toolbarDiv.appendChild(newTodoBtn);
  newTodoBtn.textContent = "+ new task";

  // newTodoBtn to make form appear on click
  newTodoBtn.addEventListener("click", function () {
    inputDiv.classList.toggle("hidden");
  });

  const bodyDiv = document.createElement("div");
  bodyDiv.setAttribute("id", "bodyDiv");
  containerDiv.appendChild(bodyDiv);

  const inputDiv = document.createElement("div");
  inputDiv.setAttribute("id", "inputDiv");
  bodyDiv.appendChild(inputDiv);
  inputDiv.setAttribute("class", "hidden");

  const inputForm = document.createElement("form");
  inputForm.setAttribute("id", "inputForm");

  inputDiv.appendChild(inputForm);

  const nameFieldset = document.createElement("fieldset");
  nameFieldset.id = "nameFieldset";
  inputForm.appendChild(nameFieldset);

  const nameLabel = document.createElement("label");
  nameLabel.for = "nameInput";
  nameLabel.textContent = "Task";
  nameFieldset.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "nameInput";
  nameFieldset.appendChild(nameInput);

  const submitBtn = document.createElement("button");
  // submitBtn.value = "Submit";
  submitBtn.id = "submitBtn";
  submitBtn.textContent = "Submit";
  inputForm.appendChild(submitBtn);

  submitBtn.addEventListener("click", () => {
    event.preventDefault();
    inputDiv.classList.toggle("hidden");
    addNewTodo(nameInput.value);
    nameInput.value = "";
  });

  const todoDiv = document.createElement("div");
  todoDiv.setAttribute("id", "todoDiv");
  bodyDiv.appendChild(todoDiv);

  const footerDiv = document.createElement("div");
  footerDiv.setAttribute("id", "footerDiv");
  containerDiv.appendChild(footerDiv);

  const attribDiv = document.createElement("div");
  attribDiv.setAttribute("id", "attribDiv");
  footerDiv.appendChild(attribDiv);

  const attribText = document.createElement("p");
  attribText.setAttribute("id", "attribText");
  attribDiv.appendChild(attribText);
  attribText.textContent = "Ninja iconos creados por Freepik - Flaticon";
}

export default pageLoad;
