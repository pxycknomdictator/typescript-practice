const input = document.getElementById("inputField") as HTMLInputElement;
const container = document.getElementById("container") as HTMLUListElement;
const btn = document.getElementById("btn") as HTMLButtonElement;

function handleGenerateNewTasks() {
  let display: string = input.value;
  if (display.trim() === "") return (display = "");
  console.log(display);
}

btn.addEventListener("click", handleGenerateNewTasks);
