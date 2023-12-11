import {
  AppRegistry,
  ScrollView,
  View,
  StatusBar,
  Image,
  TouchableHighlight,
  ImageBackground,
  Alert,
  Dimensions,
  Button,
  TextInput,
  Text,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React, { Component, useState } from "react";
//import Constants from 'expo-constants';
// You can import supported modules from npm
import { Card } from "react-native-paper";

// or any files within the Snack
import Home from "./components/HomeComponent/Home";
import NavBar from "./components/NavBarComponent/NavBar";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerNavBar}>
        <NavBar />
      </View>
      <View style={styles.containerHome}>
        <Home />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    height: deviceHeight,
    width: deviceWidth,
    justifyContent: "center",
    backgroundColor: "white",
    padding: 8,
  },
  containerNavBar: {
    height: 0.5 * (deviceHeight / 10),
    width: 1 * (deviceWidth / 10),
    backgroundColor: "white",
  },
  containerHome: {
    height: 9 * (deviceHeight / 10),
    width: deviceWidth,
  },
});
