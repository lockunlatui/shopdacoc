import React, { Component } from "react";
import { AppRegistry, Text, StatusBar, View } from "react-native";
import App from "./components/App.js";

export default class DuAn extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <App />
      </View>
    );
  }
}

AppRegistry.registerComponent("main", () => DuAn);
