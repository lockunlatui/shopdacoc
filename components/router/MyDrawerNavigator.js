import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import Tabs from "./Tabs";
import { Dimensions } from "react-native";
import Menu from "../screens/authentication/Menu";
const { width } = Dimensions.get("window");

const MyDrawerNavigator = createDrawerNavigator({
  Tabs: {
    screen: Tabs
  }
},
  {
    drawerWidth: width * 0.7,
    drawerPosition: "left",
    contentComponent: props => <Menu {...props} />
  });

  export default createAppContainer(MyDrawerNavigator);