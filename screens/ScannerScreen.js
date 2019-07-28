import React, { Component } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { BarCodeScanner, Constants } from "expo-barcode-scanner";
import * as Permissions from "expo-permissions";

export default class BarcodeApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			assetArray: [],
			assetText: ""
		};
	}
	state = {
		hasCameraPermission: null
	};

	componentDidMount() {
		this._requestCameraPermission();
	}

	_requestCameraPermission = async () => {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({
			hasCameraPermission: status === "granted"
		});
	};

	_handleBarCodeRead = data => {
		// this.state.assetArray.map((val, key) => {
		// 	return <Asset key={key} keyval={key} val={val} />;
		// });
		Alert.alert("Scan successful!", JSON.stringify(data.data));
		console.log("asset tag:", data.data);
		// this.state.assetArray.push({ assetTag: data.data });
		// this.setState({ assetArray: this.state.assetArray });
		// this.setState({ assetText: data.data });
	};

	render() {
		return (
			<View style={styles.container}>
				{this.state.hasCameraPermission === null ? (
					<Text>Requesting for camera permission</Text>
				) : this.state.hasCameraPermission === false ? (
					<Text>Camera permission is not granted</Text>
				) : (
					<BarCodeScanner
						onBarCodeRead={this._handleBarCodeRead}
						style={{
							height: 400,
							width: 400
						}}
					/>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingTop: Constants.statusBarHeight,
		backgroundColor: "#ecf0f1"
	},
	paragraph: {
		margin: 24,
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
		color: "#34495e"
	}
});
