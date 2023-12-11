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
import Form from "./components/FormComponent/FormComponent";
import Service from "./components/ServiceComponent/ServiceComponent";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export default function App() {
  const options = ["Home", "Services", "About Us", "Our Job", "Contact Us"];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [contactUsPageDisplay, setContactUsPageDisplay] = useState("none");
  const [servicePageDisplay, setServicePageDisplay] = useState("none");
  const [aboutUsPageDisplay, setAboutUsPageDisplay] = useState("none");
  const [ourJobPageDisplay, setOurJobPageDisplay] = useState("none");
  const [homePageDisplay, setHomePageDisplay] = useState("none?");

  const handleSelect = (option) => {
    setSelectedOption(option);
    switch (option) {
      case "Contact Us":
        setContactUsPageDisplay("block");
        setServicePageDisplay("none");
        setAboutUsPageDisplay("none");
        setOurJobPageDisplay("none");
        setHomePageDisplay("block");
        break;
      case "Our Job":
        alert("This option will take to " + option + " section");
        break;
      case "About Us":
        alert("This option will take to " + option + " section");
        break;
      case "Services":
        setServicePageDisplay("block");
        setContactUsPageDisplay("none");
        setAboutUsPageDisplay("none");
        setOurJobPageDisplay("none");
        setHomePageDisplay("block");
        break;
      case "Home":
        setHomePageDisplay("block");
        break;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerNavBar}>
        <NavBar
          options={options}
          selectedOption={selectedOption}
          onSelect={handleSelect}
        />
      </View>
      <View style={{ display: homePageDisplay }}>
        <View style={styles.containerHome}>
          <Home />
        </View>
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
