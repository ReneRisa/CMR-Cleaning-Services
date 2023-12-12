import React, { Component } from "react";
import {
  AppRegistry,
  ScrollView,
  Text,
  View,
  StatusBar,
  StyleSheet,
  Image,
  TouchableHighlight,
  ImageBackground,
  Alert,
  Dimensions,
  Button,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

import Form from "../FormComponent/FormComponent";
import Service from "../ServiceComponent/ServiceComponent";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export default class App extends Component {
  state = {
    inputValue: "Name",
    inputValue1: "E-mail",
    inputValue2: "Message",
  };

  render() {
    return (
      <View style={styles.containerHeader}>
        <Text style={styles.title}>CMR Cleaning Services</Text>
        <Text style={styles.information}>
          Reliable house cleaning professionals serving the greater Reno area.
          We provide one of the best cleaning services for home, office,
          construction sites, and more! We can take on any job at any time. All
          equipment is included at no extra charge. Please call us today for a
          FREE ESTIMATE. Se Habla Espanol
        </Text>
        <Text style={styles.paragraphCellPhone}>Call Now (775)-507-8158</Text>

        <TouchableHighlight
          onPress={() => {
            alert("This button will take you to the contact us form");
          }}
        >
          <Text style={styles.paragraphButtonQuote}>Get a Quote</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerHeader: {
    height: 5 * (deviceHeight / 10),
    backgroundColor: "white",
    width: 9.6 * (deviceWidth / 10),
    alignItems: "center",
  },
  containerContact: {
    height: 5 * (deviceHeight / 10),
    backgroundColor: "white",
    width: deviceWidth,
    alignItems: "center",
  },
  containerContactName: {
    flexDirection: "row",
    height: 0.6 * (deviceHeight / 10),
    width: 10 * (deviceWidth / 10),
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  paragraphContact: {
    color: "black",
    textAlign: "center",
    fontSize: deviceHeight / 30,
    marginTop: 2,
    marginBottom: 2,
  },
  textInput: {
    height: 0.5 * (deviceHeight / 10),
    width: 4.5 * (deviceWidth / 10),
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 0.5,
    margin: 3,
    paddingStart: 6,
  },
  textInputMessage: {
    height: 2 * (deviceHeight / 10),
    width: 9.3 * (deviceWidth / 10),
    borderRadius: 10,
    borderWidth: 0.5,
    margin: 3,
    paddingStart: 6,
  },
  buttonSubmit: {
    color: "black",
    textAlign: "center",
    backgroundColor: "#E5E059",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  containerServices: {
    height: 10 * (deviceHeight / 10),
    backgroundColor: "white",
    width: deviceWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  containerLeft: {
    width: 9 * (deviceWidth / 10),
    alignItems: "center",
    justifyContent: "center",
  },
  containerRight: {
    width: 9 * (deviceWidth / 10),
    alignItems: "center",
    justifyContent: "center",
  },
  containerImage: {
    height: 1.4 * (deviceHeight / 10),
    width: 8.5 * (deviceWidth / 10),
    borderRadius: 10,
    marginTop: 1,
    marginBottom: 15,
  },
  paragraphButtonQuote: {
    color: "black",
    textAlign: "center",
    backgroundColor: "#E5E059",
    marginTop: 8,
    padding: 10,
    borderRadius: 10,
  },
  paragraphCellPhone: {
    color: "blue",
    textAlign: "center",
    fontSize: deviceHeight / 45,
    marginTop: 6,
    marginBottom: 6,
  },
  title: {
    color: "black",
    textAlign: "center",
    fontSize: deviceHeight / 20,
    marginTop: 1,
  },
  information: {
    color: "silver",
    textAlign: "justify",
    marginTop: 6,
    marginEnd: 12,
    marginStart: 12,
    marginBottom: 5,
    padding: 5,
    fontSize: deviceHeight / 55,
  },
});
