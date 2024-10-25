const input = document.getElementById("inputField") as HTMLInputElement;
const container = document.getElementById("container") as HTMLUListElement;
const btn = document.getElementById("btn") as HTMLButtonElement;
const databaseKey = "storageAccessKey";
const database: string[] = [];

function StoreDataInFakeDatabase(newTask: string[]): void {
  localStorage.setItem(databaseKey, JSON.stringify(newTask));
}

function handleGenerateNewTasks(): void | string {
  let display: string = input.value;
  if (display.trim() === "") return (display = "");
  database.push(display);
  StoreDataInFakeDatabase(database);
  input.value = "";
  RenderedAllTasks();
}

function RenderedAllTasks() {
  container.innerHTML = "";
  database.forEach((task: string) => {
    container.innerHTML += `<li>${task}</li>`;
  });
}

RenderedAllTasks();

btn.addEventListener("click", handleGenerateNewTasks);
