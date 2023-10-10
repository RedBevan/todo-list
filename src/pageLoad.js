function pageLoad() {
  // Select content div
  const content = document.querySelector("#content");

  // Add text
  const containerDiv = document.createElement("div");
  containerDiv.setAttribute("id", "containerDiv");
  content.appendChild(containerDiv);

  const headerDiv = document.createElement("div");
  headerDiv.setAttribute("id", "headerDiv");
  containerDiv.appendChild(headerDiv);

  const toolbarDiv = document.createElement("div");
  toolbarDiv.setAttribute("id", "toolbarDiv");
  containerDiv.appendChild(toolbarDiv);

  const bodyDiv = document.createElement("div");
  bodyDiv.setAttribute("id", "bodyDiv");
  containerDiv.appendChild(bodyDiv);
}

export default pageLoad;
