interface Todo {
  text: string;
  completed: boolean;
}

const todos: Todo[] = [];

const btn = document.getElementById("btn");
const form = document.getElementById("todoform") as HTMLFormElement;
const input = document.getElementById("todoinput") as HTMLInputElement;
const list = document.getElementById("todo-list") as HTMLUListElement;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // in memory
  const newToDo: Todo = {
    text: input.value,
    completed: false,
  };
  createToDo(newToDo);
  todos.push(newToDo);
  input.value = "";
});

function createToDo(todo: Todo) {
  // creating new li element
  const newLi = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newLi.append(todo.text);
  newLi.append(checkbox);
  list.append(newLi);
}
