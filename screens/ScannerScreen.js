import React, { Component } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import BarcodeScanner from "../components/BarcodeScanner";

export default function ScanerScreen() {
	return (
		<View style={styles.container}>
			<BarcodeScanner />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: "center",
		// justifyContent: "center",
		backgroundColor: "#ecf0f1"
	}
});
