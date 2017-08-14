import API from "./api.js";

const register = (EMAIL, TENKH, SDT, PASSWORD) =>
  fetch(API + "/api/register.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ EMAIL, TENKH, SDT, PASSWORD })
  }).then(res => res.text());

module.exports = register;
