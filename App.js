import React from "react";
import { StatusBar, View } from "react-native";
import Main from "./components/Main";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <Main />
      </View>
    );
  }
}