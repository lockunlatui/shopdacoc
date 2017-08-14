import API from "./api.js";

const checkInfo = (token, TENKH, SDT, ADDRESS) =>
  fetch(API + "/api/change_info.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ token, TENKH, SDT, ADDRESS })
  }).then(res => res.json());

module.exports = checkInfo;
