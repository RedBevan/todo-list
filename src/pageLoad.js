import estrellaIcon from "/home/joe/repos/todo-list/src/assets/images/estrella-white.png";

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

  const bodyDiv = document.createElement("div");
  bodyDiv.setAttribute("id", "bodyDiv");
  containerDiv.appendChild(bodyDiv);

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
