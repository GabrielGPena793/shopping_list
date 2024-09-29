const input = document.querySelector("#task_title");
const formTask = document.querySelector("#form_task");
const taskList = document.querySelector("#container_tasks");
const removeMessage = document.querySelector("#removed");
const closeMessage = document.querySelector("#close");

formTask.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskTitle = input.value;

  if (taskTitle.trim() === "") {
    alert("É necessário escrever o nome da task.");
    return;
  }

  try {
    createTask(taskTitle);
    input.value = "";
  } catch (error) {
    alert("Erro ao remover a task, tente novamente.");
  }
});

closeMessage.onclick = () => {
  removeMessage.classList.add("hidden");
};

function createTask(taskTitle) {
  const div = document.createElement("div");
  div.classList.add("task");

  const divContentInput = document.createElement("div");
  divContentInput.classList.add("container_input");

  const inputText = document.createElement("input");
  inputText.setAttribute("id", "check");
  inputText.setAttribute("type", "checkbox");
  inputText.classList.add("check");
  inputText.id = "check";

  const label = document.createElement("label");
  label.innerText = taskTitle;
  label.setAttribute("for", "check");

  const img = document.createElement("img");
  img.setAttribute("src", "./assets/trash.svg");
  img.setAttribute("id", `remove_${taskTitle}`);

  img.onclick = () => {
    div.remove();
    alertRemoveTask();
  };

  divContentInput.appendChild(inputText);
  divContentInput.appendChild(label);
  div.appendChild(divContentInput);
  div.appendChild(img);

  taskList.appendChild(div);
}

function alertRemoveTask() {
  removeMessage.classList.remove("hidden");

  setTimeout(() => {
    removeMessage.classList.add("hidden");
  }, 3000);
}
