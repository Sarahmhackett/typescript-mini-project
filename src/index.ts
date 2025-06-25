const btn = document.getElementById("btn");
const input = document.getElementById("to-do-input") as HTMLInputElement;

btn?.addEventListener("click", () => {
  alert(input.value);
  input.value = "";
});
