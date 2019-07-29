import React from "react";
import { Platform } from "react-native";
import {
	createStackNavigator,
	createMaterialTopTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import ScannerScreen from "../screens/ScannerScreen";
import SettingsScreen from "../screens/SettingsScreen";

const config = Platform.select({
	web: { headerMode: "screen" },
	default: {}
});

const HomeStack = createStackNavigator(
	{
		screen: HomeScreen
	},
	config
);

HomeStack.navigationOptions = {
	tabBarLabel: "Home",
	tabBarIcon: ({ focused, tintColor }) => (
		<TabBarIcon
			focused={focused}
			tintColor={tintColor}
			name={
				Platform.OS === "ios"
					? `ios-information-circle${focused ? "" : "-outline"}`
					: "md-information-circle"
			}
		/>
	)
};

HomeStack.path = "";

const BarcodeScannerStack = createStackNavigator(
	{
		screen: ScannerScreen
	},
	config
);

BarcodeScannerStack.navigationOptions = {
	tabBarLabel: "Scanner",
	tabBarIcon: ({ focused, tintColor }) => (
		<TabBarIcon
			focused={focused}
			tintColor={tintColor}
			name={Platform.OS === "ios" ? "ios-barcode" : "md-barcode"}
		/>
	)
};

BarcodeScannerStack.path = "";

const SettingsStack = createStackNavigator(
	{
		screen: SettingsScreen
	},
	config
);

SettingsStack.navigationOptions = {
	tabBarLabel: "Settings",
	tabBarIcon: ({ focused, tintColor }) => (
		<TabBarIcon
			focused={focused}
			tintColor={tintColor}
			name={Platform.OS === "ios" ? "ios-options" : "md-options"}
		/>
	)
};

SettingsStack.path = "";

const tabNavigator = createMaterialTopTabNavigator(
	{
		HomeStack,
		BarcodeScannerStack,
		SettingsStack
	},
	{
		tabBarPosition: "bottom",
		tabBarOptions: {
			showIcon: true,
			activeTintColor: "#ffffff",
			inactiveTintColor: "#deb408",
			style: {
				backgroundColor: "black"
			},
			indicatorStyle: {
				borderBottomColor: "#c3111b",
				borderBottomWidth: 2
			}
		}
	}
);

tabNavigator.path = "";

export default tabNavigator;
