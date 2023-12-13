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
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export default class Service extends Component {
  state = {
    services: [
      {
        serviceTitle: "Home Cleaning Section",
        serviceImage:
          "https://codehs.com/uploads/e4bbb02828471aeba80d5b19daa24eca",
      },
      {
        serviceTitle: "Window Washing Section",
        serviceImage:
          "https://codehs.com/uploads/6b19325e1935ee43e75ab139f32de2e8",
      },
      {
        serviceTitle: "Move-in/Move-out Section",
        serviceImage:
          "https://codehs.com/uploads/b76d7fc259d2a887e59425a42bb95703",
      },
      {
        serviceTitle: "Maid Services Section",
        serviceImage:
          "https://codehs.com/uploads/f3ee1e5f008fc8d0157a03a439875174",
      },
      {
        serviceTitle: "Commercial Cleaning Section",
        serviceImage:
          "https://codehs.com/uploads/2d86d10df16a428e9094e6276dd1aedd",
      },
      {
        serviceTitle: "Carpet Cleaning Section",
        serviceImage:
          "https://codehs.com/uploads/5b652df4313dd8474aa9e386ac329faa",
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.services.map((service, index) => (
          <View key={index}>
            <TouchableHighlight
              onPress={() => {
                alert(service.serviceTitle + " --index at: " + index);
              }}
            >
              <Image
                style={styles.containerImage}
                source={{
                  uri: service.serviceImage,
                }}
              />
            </TouchableHighlight>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 10 * (deviceHeight / 10),
    backgroundColor: "white",
    width: 9.6 * (deviceWidth / 10),
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
});
