// structure of a to-do list item
interface Todo {
  text: string;
  completed: boolean;
}

// grabbing DOM elements
const form = document.getElementById("todoform") as HTMLFormElement;
const input = document.getElementById("todoinput") as HTMLInputElement;
const list = document.getElementById("todo-list") as HTMLUListElement;

// reading existing todos from local storage
const todos: Todo[] = readToDos();

// for each to do, create a new to do list item
todos.forEach(createToDo);

// reading todos from local storage
function readToDos(): Todo[] {
  // should return type Todo interface
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
}
// saves to local storage
function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
// when the form is submitted, create a new to do list item in memory
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newToDo: Todo = {
    text: input.value,
    completed: false,
  };
  // add it to the DOM by calling functions
  createToDo(newToDo);
  todos.push(newToDo);

  saveToDos();
  input.value = "";
});

function createToDo(todo: Todo) {
  // creating new li element
  const newLi = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;

  checkbox.addEventListener("change", () => {
    todo.completed = checkbox.checked;
    saveToDos();
  });

  newLi.append(todo.text);
  newLi.append(checkbox);
  list.append(newLi);
}
