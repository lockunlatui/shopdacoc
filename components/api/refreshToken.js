import saveToken from "./saveToken";
import getToken from "./getToken.js";
import API from "./api.js";

const getNewToken = token =>
  fetch(API + "/api/refresh_token.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ token })
  }).then(res => res.text());

const refreshToken = async () => {
  try {
    const token = await getToken();
    if (token === "" || token === "TOKEN_KHONG_HOP_LE") {
      console.log(" Chua co token");
    }
    const newToken = await getNewToken(token);
    await saveToken(newToken);
    console.log("TOKEN MOI:" + newToken);
  } catch (e) {
    console.log(e);
  }
};

export default refreshToken;
