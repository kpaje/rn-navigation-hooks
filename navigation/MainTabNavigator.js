import React from "react";
import { Platform } from "react-native";
import {
	createStackNavigator,
	createMaterialBottomTabNavigator
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
		Home: HomeScreen
	},
	config
);

HomeStack.navigationOptions = {
	tabBarLabel: "Home",
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
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
		BarcodeScanner: ScannerScreen
	},
	config
);

BarcodeScannerStack.navigationOptions = {
	tabBarLabel: "Scanner",
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === "ios" ? "ios-barcode" : "md-barcode"}
		/>
	)
};

BarcodeScannerStack.path = "";

const SettingsStack = createStackNavigator(
	{
		Settings: SettingsScreen
	},
	config
);

SettingsStack.navigationOptions = {
	tabBarLabel: "Settings",
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === "ios" ? "ios-options" : "md-options"}
		/>
	)
};

SettingsStack.path = "";

const tabNavigator = createMaterialBottomTabNavigator({
	HomeStack,
	BarcodeScannerStack,
	SettingsStack
});

tabNavigator.path = "";

export default tabNavigator;
