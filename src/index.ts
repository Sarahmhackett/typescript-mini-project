interface Todo {
  text: string;
  completed: boolean;
}

const btn = document.getElementById("btn");
const form = document.getElementById("todoform") as HTMLFormElement;
const input = document.getElementById("todoinput") as HTMLInputElement;
const list = document.getElementById("todo-list") as HTMLUListElement;

const todos: Todo[] = readToDos();

todos.forEach(createToDo);

function readToDos(): Todo[] {
  // should return type Todo interface
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // in memory
  const newToDo: Todo = {
    text: input.value,
    completed: false,
  };
  createToDo(newToDo);
  todos.push(newToDo);

  localStorage.setItem("todos", JSON.stringify(todos)); // needs to be a string
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
