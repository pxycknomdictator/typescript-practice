import {
  STORE_DATA_IN_LOCALSTORAGE,
  GET_DATA_FROM_LOCALSTORAGE,
} from "./store.js";
export interface Todos {
  id: number;
  todo: string;
}

const input = document.getElementById("input") as HTMLInputElement;
const btn = document.getElementById("add");
const container = document.getElementById("list_container") as HTMLElement;
const todos = GET_DATA_FROM_LOCALSTORAGE();

const render_data = () => {
  const lists = todos
    .map((todo): string => `<li id=${todo.id}>${todo.todo}</li>`)
    .join("");
  container.innerHTML = lists;
};

const addTodo = (event: MouseEvent) => {
  event.preventDefault();
  if (input.value.trim() === "") {
    alert("Please provide the value");
    return;
  }
  todos.push({ id: Math.random(), todo: input.value });
  STORE_DATA_IN_LOCALSTORAGE(todos);
  input.value = "";
  render_data();
};

render_data();
btn?.addEventListener("click", addTodo);
