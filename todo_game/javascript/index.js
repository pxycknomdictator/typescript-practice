import { STORE_DATA_IN_LOCALSTORAGE, GET_DATA_FROM_LOCALSTORAGE, } from "./store.js";
const input = document.getElementById("input");
const btn = document.getElementById("add");
const container = document.getElementById("list_container");
let todos = GET_DATA_FROM_LOCALSTORAGE();
export const render_data = () => {
    const lists = todos
        .map((todo) => `<li>${todo.todo} <button data-remove="remove" id=${todo.id}>Remove</button></li>`)
        .join("");
    container.innerHTML = lists;
    const removeBtns = document.querySelectorAll("[data-remove]");
    removeBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = parseFloat(btn.id);
            removeTodo(id);
        });
    });
};
const removeTodo = (id) => {
    todos = todos.filter((todo) => todo.id !== id);
    STORE_DATA_IN_LOCALSTORAGE(todos);
    render_data();
};
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
render_data();
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", addTodo);
