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
import Service from "./components/ServiceComponent/ServiceComponent";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <ScrollView style={styles.scrollView}>
        <Home />
        <Service />
      </ScrollView>
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
  scrollView: {
    backgroundColor: "white",
    height: 15 * deviceHeight,
    width: deviceWidth,
  },
});
