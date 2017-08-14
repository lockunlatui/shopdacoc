import API from "./api.js";

const checkLogin = token =>
  fetch(API + "/api/check_login.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ token })
  }).then(res => res.json());

module.exports = checkLogin;
