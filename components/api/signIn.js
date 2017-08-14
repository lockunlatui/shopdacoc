import API from "./api.js";
const signIn = (EMAIL, PASSWORD) =>
  fetch(API + "/api/login.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ EMAIL, PASSWORD })
  }).then(res => res.json());

module.exports = signIn;
