import { Platform } from "react-native";

const API =
  Platform.OS === "android" ? "http://nhom5.esy.es" : "http://nhom5.esy.es";

module.exports = API;
