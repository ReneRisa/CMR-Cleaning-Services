import React, { Component } from "react";
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

export default class OurJob extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.content}>
            <Text style={styles.heading}>Our Cleaning Services</Text>

            <View style={styles.jobContainer}>
              <Image
                source={{
                  uri: "https://codehs.com/uploads/6dd7ebafd42c709f61d2460a7b6620dd",
                }}
                style={styles.jobImage}
              />
              <Text style={styles.jobTitle}>Bathroom Cleaning</Text>
              <Text style={styles.jobDescription}>
                Our expert cleaners pay attention to every detail, ensuring your
                bathroom is spotless and sanitized.
              </Text>
            </View>

            <View style={styles.jobContainer}>
              <Image
                source={{
                  uri: "https://codehs.com/uploads/6dd7ebafd42c709f61d2460a7b6620dd",
                }}
                style={styles.jobImage}
              />
              <Text style={styles.jobTitle}>Kitchen Cleaning</Text>
              <Text style={styles.jobDescription}>
                We tackle grease, grime, and dirt in your kitchen, leaving it
                sparkling clean and hygienic.
              </Text>
            </View>

            <View style={styles.jobContainer}>
              <Image
                source={{
                  uri: "https://codehs.com/uploads/6dd7ebafd42c709f61d2460a7b6620dd",
                }}
                style={styles.jobImage}
              />
              <Text style={styles.jobTitle}>Living Room Cleaning</Text>
              <Text style={styles.jobDescription}>
                Enjoy a fresh and tidy living space with our professional
                cleaning services for your living room.
              </Text>
            </View>

            {/* Add more job sections as needed */}
          </View>
        </ScrollView>
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
    padding: 16,
  },
  content: {
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  jobContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  jobImage: {
    width: 20,
    height: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  jobDescription: {
    fontSize: 16,
    textAlign: "center",
  },
});
