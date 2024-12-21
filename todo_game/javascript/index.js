import { STORE_DATA_IN_LOCALSTORAGE, GET_DATA_FROM_LOCALSTORAGE, } from "./store.js";
const input = document.getElementById("input");
const btn = document.getElementById("add");
const container = document.getElementById("list_container");
const todos = GET_DATA_FROM_LOCALSTORAGE();
const addTodo = (event) => {
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
const render_data = () => {
    const lists = todos
        .map((todo) => `<li id=${todo.id}>${todo.todo}</li>`)
        .join("");
    container.innerHTML = lists;
};
render_data();
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", addTodo);
