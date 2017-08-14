import React from "react";
import { DrawerNavigator } from "react-navigation";
import { Tabs } from "./Tabs.js";
import { Dimensions } from "react-native";
import Menu from "../screens/authentication/Menu.js";
const { height, width } = Dimensions.get("window");
export const SlideMenu = DrawerNavigator(
  {
    Tabbar: {
      screen: Tabs
    }
  },
  {
    drawerWidth: width * 0.7,
    drawerPosition: "left",
    contentComponent: props => <Menu {...props} />
  }
);
