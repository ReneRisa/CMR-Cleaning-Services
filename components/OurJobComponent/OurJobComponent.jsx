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
  state = {
    jobs: [
      {
        title: "Bathroom Cleaning",
        image: "https://codehs.com/uploads/386a037ea9713c8f50b391826200ff7c",
        description:
          "Our expert cleaners pay attention to every detail, ensuring your bathroom is spotless and sanitized",
      },
      {
        title: "Kitchen Cleaning",
        image: "https://codehs.com/uploads/2d04d04b3fc673f8c5cf88a26d894743",
        description:
          "We tackle grease, grime, and dirt in your kitchen, leaving it sparkling clean and hygienic.",
      },
      {
        title: "Living Room Cleaning",
        image: "https://codehs.com/uploads/fa391f32c3370a5b61e0d607ed3db41b",
        description:
          "Enjoy a fresh and tidy living space with our professional cleaning services for your living room.",
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.content}>
            <Text style={styles.heading}>Our Job at CMR</Text>
            {this.state.jobs.map((job, index) => (
              <View key={index} style={styles.jobContainer}>
                <Image style={styles.jobImage} source={{ uri: job.image }} />
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.jobDescription}>{job.description}</Text>
              </View>
            ))}
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
