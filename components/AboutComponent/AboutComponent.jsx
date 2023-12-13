import { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export default class About extends Component {
  state = {
    images: [
      {
        title: "image 1",
        image: "https://codehs.com/uploads/91dbb2adda6a959199c221247bfe7124",
      },
      {
        title: "image 2",
        image: "https://codehs.com/uploads/6dd7ebafd42c709f61d2460a7b6620dd",
      },
      {
        title: "image 3",
        image: "https://codehs.com/uploads/98edbf5ae13c07ec3cc8526270e4e429",
      },
      {
        title: "image 4",
        image: "https://codehs.com/uploads/7220a53620ff82ae6cab51ea26c24714",
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.content}>
            <Text style={styles.heading}>About Us</Text>
            <Text style={styles.description}>
              Welcome to CleanMaster, your trusted partner in creating a cleaner
              and healthier environment for your home or office. We understand
              the importance of a clean space and its impact on your well-being.
            </Text>

            <Text style={styles.description}>
              Our mission is to simplify your life by providing top-notch
              cleaning services tailored to your needs. With a team of
              experienced and dedicated professionals, we strive to exceed your
              expectations and deliver excellence in every cleaning task.
            </Text>
            <View style={styles.containerImage}>
              {this.state.images.map((image, index) => (
                <View key={index} style={styles.imageContainer}>
                  <Image style={styles.image} source={{ uri: image.image }} />
                </View>
              ))}
            </View>

            <Text style={styles.description}>What sets us apart:</Text>

            <Text style={styles.bulletPoint}>
              • Professional and Reliable Team: Our skilled cleaners are
              thoroughly trained and committed to delivering quality service
              with a smile.
            </Text>

            <Text style={styles.bulletPoint}>
              • Customized Cleaning Plans: We understand that every space is
              unique. That's why we offer personalized cleaning plans to meet
              your specific requirements.
            </Text>

            <Text style={styles.bulletPoint}>
              • Eco-Friendly Practices: We care about the environment and use
              eco-friendly cleaning products to ensure a safe and sustainable
              cleaning experience.
            </Text>

            <Text style={styles.bulletPoint}>
              • Easy Booking and Scheduling: Our user-friendly app makes it
              convenient for you to book our services and schedule cleanings at
              your preferred time.
            </Text>

            <Text style={styles.description}>
              Thank you for choosing CleanMaster. We look forward to serving you
              and making your space cleaner, healthier, and more enjoyable.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerImage: {
    height: 4.5 * (deviceHeight / 10),
    width: 8.5 * (deviceWidth / 10),
    marginTop: 15,
    marginBottom: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 4 * (deviceWidth / 10),
    height: 2 * (deviceHeight / 10),
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
  },
  image: {
    width: 4 * (deviceWidth / 10),
    height: 2 * (deviceHeight / 10),
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
  container: {
    height: 8 * (deviceHeight / 10),
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
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "justify",
    padding: 10,
  },
  bulletPoint: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 10,
    textAlign: "justify",
  },
});
