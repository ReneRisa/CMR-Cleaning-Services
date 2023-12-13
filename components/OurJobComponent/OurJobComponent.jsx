import { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export default class OurJob extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.content}>
            <Text style={styles.heading}>Our Job at CMR</Text>

            <View style={styles.jobContainer}>
              <Image
                source={{
                  uri: "https://codehs.com/uploads/386a037ea9713c8f50b391826200ff7c",
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
                  uri: "https://codehs.com/uploads/2d04d04b3fc673f8c5cf88a26d894743",
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
                  uri: "https://codehs.com/uploads/fa391f32c3370a5b61e0d607ed3db41b",
                }}
                style={styles.jobImage}
              />
              <Text style={styles.jobTitle}>Living Room Cleaning</Text>
              <Text style={styles.jobDescription}>
                Enjoy a fresh and tidy living space with our professional
                cleaning services for your living room.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    height: 10 * (deviceHeight / 10),
    backgroundColor: "white",
    width: 9.6 * (deviceWidth / 10),
    alignItems: "center",
    justifyContent: "center",
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
    width: 200,
    height: 150,
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
