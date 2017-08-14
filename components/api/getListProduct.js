import API from "./api.js";

const getListProduct = (idType, page) => {
  const url = `${API}/api/product_by_type.php?IDLOAISP=${idType}&page=${page}`;
  return fetch(url).then(res => res.json());
};

export default getListProduct;
