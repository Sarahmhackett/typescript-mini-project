const btn = document.getElementById("btn");
const form = document.getElementById("todoform") as HTMLFormElement;
const input = document.getElementById("todoinput") as HTMLInputElement;
const list = document.getElementById("todo-list") as HTMLUListElement;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newToDoText = input.value;

  const newLi = document.createElement("li");
  newLi.textContent = newToDoText;
  list.append(newLi);
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newLi.append(checkbox);
  input.value = "";
});
