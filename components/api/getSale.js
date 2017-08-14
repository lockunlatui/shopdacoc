import API from "./api.js";
const getSale = () => fetch(API + "/api/sale.php").then(res => res.json());

export default getSale;
