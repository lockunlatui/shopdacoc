import API from "./api.js";

const initData = () => fetch(API + "/api/").then(res => res.json());

export default initData;
