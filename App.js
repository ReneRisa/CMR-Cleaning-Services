import {
  ScrollView,
  View,
  StatusBar,
  Dimensions,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React, { Component, useState } from "react";
//import Constants from 'expo-constants';
// You can import supported modules from npm

// or any files within the Snack
import Home from "./components/HomeComponent/Home";
import NavBar from "./components/NavBarComponent/NavBar";
import Service from "./components/ServiceComponent/ServiceComponent";
import Form from "./components/FormComponent/FormComponent";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export default function App() {
  const options = ["Home", "Services", "About Us", "Our Job", "Contact Us"];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [contactUsPageDisplay, setContactUsPageDisplay] = useState(false);
  const [servicePageDisplay, setServicePageDisplay] = useState(true);
  const [aboutUsPageDisplay, setAboutUsPageDisplay] = useState(false);
  const [ourJobPageDisplay, setOurJobPageDisplay] = useState(false);
  const [homePageDisplay, setHomePageDisplay] = useState(true);

  const handleSelect = (option) => {
    setSelectedOption(option);
    switch (option) {
      case "Contact Us":
        setContactUsPageDisplay(true);
        setServicePageDisplay(false);
        setAboutUsPageDisplay(false);
        setOurJobPageDisplay(false);
        setHomePageDisplay(true);
        break;
      case "Our Job":
        setOurJobPageDisplay(true);
        setContactUsPageDisplay(false);
        setAboutUsPageDisplay(false);
        setServicePageDisplay(false);
        setHomePageDisplay(true);
        break;
      case "About Us":
        setAboutUsPageDisplay(true);
        setContactUsPageDisplay(false);
        setOurJobPageDisplay(false);
        setServicePageDisplay(false);
        setHomePageDisplay(true);
        break;
      case "Services":
        setServicePageDisplay(true);
        setContactUsPageDisplay(false);
        setAboutUsPageDisplay(false);
        setOurJobPageDisplay(false);
        setHomePageDisplay(true);
        break;
      case "Home":
        setHomePageDisplay(true);
        setServicePageDisplay(true);
        break;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <NavBar
        options={options}
        selectedOption={selectedOption}
        onSelect={handleSelect}
      />
      <ScrollView style={styles.scrollView}>
        {homePageDisplay ? <Home /> : null}
        {servicePageDisplay ? <Service /> : null}
        {contactUsPageDisplay ? <Form /> : null}
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
  },
});
