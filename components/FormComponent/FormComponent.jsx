import React, { Component, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export default class Form extends Component {
  state = {
    inputValue: "Name",
    inputValue1: "E-mail",
    inputValue2: "Message",
  };
  render() {
    return (
      <View style={styles.containerContact}>
        <Text style={styles.paragraphContact}>Contact Us</Text>
        <View style={styles.containerContactName}>
          <TextInput
            ref={(input) => (this.inputValue = input)}
            placeholder="Name"
            onChangeText={(inputValue) => this.setState({ inputValue })}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Email"
            onChangeText={(inputValue1) => this.setState({ inputValue1 })}
            style={styles.textInput}
          />
        </View>
        <TextInput
          onChangeText={(inputValue2) => this.setState({ inputValue2 })}
          style={styles.textInputMessage}
          placeholder="Message"
          multiline={true}
        />
        <TouchableHighlight
          onPress={() => {
            alert("This will submit a form with the information provided");
          }}
        >
          <View style={styles.buttonSubmit}>
            <Text style={styles.paragraphButtonSubmit}>Submit</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});
