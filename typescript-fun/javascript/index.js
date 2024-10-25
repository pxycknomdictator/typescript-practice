"use strict";
const input = document.getElementById("inputField");
const container = document.getElementById("container");
const btn = document.getElementById("btn");
function handleGenerateNewTasks() {
    let display = input.value;
    if (display.trim() === "")
        return (display = "");
    console.log(display);
}
btn.addEventListener("click", handleGenerateNewTasks);
