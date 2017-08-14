import API from "./api.js";

const getNew = () =>
  fetch(API + "/api/new_product.php").then(res => res.json());

export default getNew;
