"use strict";
const form = document.getElementById("form");
const input = document.getElementById("username");
const result = document.getElementById("result");
const error = document.getElementById("error");
const renderUserInformation = (data) => {
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
const fetchUserInformation = async (event) => {
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
  const res = await response.json();
  if ("message" in res) {
    error.innerText = "User not found";
    result.innerHTML = "";
    input.value = "";
    return;
  }
  renderUserInformation(res);
};
form.addEventListener("submit", fetchUserInformation);
