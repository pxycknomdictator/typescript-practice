const form = document.getElementById("form") as HTMLFormElement;
const input = document.getElementById("username") as HTMLInputElement;
const result = document.getElementById("result") as HTMLDivElement;
const error = document.getElementById("error") as HTMLDivElement;

interface GitHubUser {
  id: number;
  avatar_url: string;
  name: string;
  location?: string;
  email?: string;
  bio?: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface ResponseError {
  message: string;
  status: number;
}

const renderUserInformation = (data: GitHubUser) => {
  result.innerHTML = `
    <img src="${data.avatar_url}" alt="avatar" />
    <h2>${data.name}</h2>
    <p>${data.bio}</p>
    <ul>
      <li>${data.followers} followers</li>
      <li>${data.following} following</li>
      <li>${data.public_repos} repos</li>
    </ul> 
  `;
  error.innerText = "";
  input.value = "";
};

const fetchUserInformation = async (event: SubmitEvent) => {
  event.preventDefault();
  const username = input.value;

  if (username.trim() === "") {
    error.innerText = "Please enter a username";
    result.innerHTML = "";
    input.value = "";
    return;
  }

  let response = await fetch(
    `https://api.github.com/users/${username.toLowerCase()}`
  );

  const res = (await response.json()) as GitHubUser | ResponseError;

  if ("message" in res) {
    error.innerText = "User not found";
    result.innerHTML = "";
    input.value = "";
    return;
  }

  renderUserInformation(res);
};

form.addEventListener("submit", fetchUserInformation);
