"use strict";
const input = document.getElementById("inputField");
const container = document.getElementById("container");
const btn = document.getElementById("btn");
const databaseKey = "storageAccessKey";
const database = [];
function StoreDataInFakeDatabase(newTask) {
    localStorage.setItem(databaseKey, JSON.stringify(newTask));
}
function handleGenerateNewTasks() {
    let display = input.value;
    if (display.trim() === "")
        return (display = "");
    database.push(display);
    StoreDataInFakeDatabase(database);
    input.value = "";
}
btn.addEventListener("click", handleGenerateNewTasks);
