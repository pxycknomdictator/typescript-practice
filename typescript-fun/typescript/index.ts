// Let's make something awesome with TypeScript

const input = document.getElementById("inputField") as HTMLInputElement;
const container = document.getElementById("container") as HTMLUListElement;
const btn = document.getElementById("btn") as HTMLButtonElement;
const lists = document.getElementsByTagName("li");
const databaseKey: string = "storageAccessKey";

function GetDataFromFakeDatabase(): string[] {
  return JSON.parse(localStorage.getItem(databaseKey) || "[]");
}

function StoreDataInFakeDatabase(newData: string[]): void {
  localStorage.setItem(databaseKey, JSON.stringify(newData));
  RenderedAllTasks();
}

const database: string[] = GetDataFromFakeDatabase();

function handleGenerateNewTasks(): void | string {
  let display: string = input.value;
  if (display.trim() === "") return (display = "");
  const duplicate = database.find(
    (task) => task.toLowerCase() === display.toLowerCase()
  );
  if (duplicate) return (input.value = "");
  database.push(display);
  StoreDataInFakeDatabase(database);
  input.value = "";
  RenderedAllTasks();
  AddEventsInAllElements();
}

function AddEventsInAllElements() {
  const ListArray = Array.from(lists);
  ListArray.forEach((element) =>
    element.addEventListener("click", (event: Event): void => {
      const ClickHTMLElement = event.target as HTMLElement;
      const id: number = Number(ClickHTMLElement.getAttribute("data-set"));
      RemoveHTMLElementById(id);
    })
  );
}

function RemoveHTMLElementById(id: number) {
  database.splice(id, 1);
  StoreDataInFakeDatabase(database);
  AddEventsInAllElements();
}

function RenderedAllTasks() {
  container.innerHTML = "";
  database.forEach((task: string, index: number) => {
    container.innerHTML += `<li data-set=${index}>${task}</li>`;
  });
}

RenderedAllTasks();
btn.addEventListener("click", handleGenerateNewTasks);
