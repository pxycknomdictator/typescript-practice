"use strict";
const input = document.getElementById("inputField");
const container = document.getElementById("container");
const btn = document.getElementById("btn");
const databaseKey = "storageAccessKey";
function GetDataFromFakeDatabase() {
    return JSON.parse(localStorage.getItem(databaseKey) || "[]");
}
function StoreDataInFakeDatabase(newTask) {
    localStorage.setItem(databaseKey, JSON.stringify(newTask));
}
const database = GetDataFromFakeDatabase();
function handleGenerateNewTasks() {
    let display = input.value;
    if (display.trim() === "")
        return (display = "");
    database.push(display);
    StoreDataInFakeDatabase(database);
    input.value = "";
    RenderedAllTasks();
}
function RenderedAllTasks() {
    container.innerHTML = "";
    database.forEach((task) => {
        container.innerHTML += `<li>${task}</li>`;
    });
}
RenderedAllTasks();
btn.addEventListener("click", handleGenerateNewTasks);
