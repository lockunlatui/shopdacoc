import API from "./api.js";
const searchProduct = key => {
  const url = `${API}/api/search.php?key=${key}`;
  return fetch(url).then(res => res.json());
};

export default searchProduct;
