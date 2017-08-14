import API from "./api.js";
const sendOrder = (token, arrayDetail) => {
  const data = { token, arrayDetail };
  console.log(data);
  fetch(API + "/api/cart.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ token, arrayDetail })
  }).then(res => res.text());
};

module.exports = sendOrder;
