import { Platform } from "react-native";

const API =
  Platform.OS === "android" ? "https://shopdacoc.000webhostapp.com" : "https://shopdacoc.000webhostapp.com";

module.exports = API;
