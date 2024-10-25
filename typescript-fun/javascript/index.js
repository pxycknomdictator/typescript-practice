"use strict";
// Let's make something awesome with TypeScript
const input = document.getElementById("inputField");
const container = document.getElementById("container");
const btn = document.getElementById("btn");
const lists = document.getElementsByTagName("li");
const databaseKey = "storageAccessKey";
function GetDataFromFakeDatabase() {
    return JSON.parse(localStorage.getItem(databaseKey) || "[]");
}
function StoreDataInFakeDatabase(newData) {
    localStorage.setItem(databaseKey, JSON.stringify(newData));
    RenderedAllTasks();
}
const database = GetDataFromFakeDatabase();
function handleGenerateNewTasks() {
    let display = input.value;
    if (display.trim() === "")
        return (display = "");
    const duplicate = database.find((task) => task.toLowerCase() === display.toLowerCase());
    if (duplicate)
        return (input.value = "");
    database.push(display);
    StoreDataInFakeDatabase(database);
    input.value = "";
    RenderedAllTasks();
    AddEventsInAllElements();
}
function AddEventsInAllElements() {
    const ListArray = Array.from(lists);
    ListArray.forEach((element) => element.addEventListener("click", (event) => {
        const ClickHTMLElement = event.target;
        const id = Number(ClickHTMLElement.getAttribute("data-set"));
        RemoveHTMLElementById(id);
    }));
}
function RemoveHTMLElementById(id) {
    database.splice(id, 1);
    StoreDataInFakeDatabase(database);
    AddEventsInAllElements();
}
function RenderedAllTasks() {
    container.innerHTML = "";
    database.forEach((task, index) => {
        container.innerHTML += `<li data-set=${index}>${task}</li>`;
    });
}
RenderedAllTasks();
btn.addEventListener("click", handleGenerateNewTasks);
