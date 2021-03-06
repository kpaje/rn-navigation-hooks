import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
// import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";

export default class BarcodeScanner extends Component {
	state = {
		hasCameraPermission: null,
		scanned: false
	};

	async componentDidMount() {
		this.getPermissionsAsync();
	}

	getPermissionsAsync = async () => {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === "granted" });
	};

	handleBarCodeScanned = ({ type, data }) => {
		this.setState({ scanned: true });
		console.log(`${data} has been scanned!`);
	};

	render() {
		const { hasCameraPermission, scanned } = this.state;

		if (hasCameraPermission === null) {
			return <Text>Requesting for camera permission</Text>;
		}
		if (hasCameraPermission === false) {
			return <Text>No access to camera</Text>;
		}
		return (
			<View style={styles.container}>
				<BarCodeScanner
					onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
					style={StyleSheet.absoluteFillObject}
				/>

				{scanned && (
					<Button
						title={"Tap to Scan Again"}
						onPress={() => this.setState({ scanned: false })}
					/>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
