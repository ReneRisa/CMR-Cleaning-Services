import React, { Component, useState } from "react";
import {
  Text,
  View,
  Modal,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableHighlight,
  Dimensions,
  Alert,
  Button,
} from "react-native";

//import ModalComponent from "../ModalComponent/ModalComponent";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export default class Service extends Component {
  state = {
    modalDisplay: false,
    modalImage: "",
    modalDescription: "",
    modalTitle: "",
    modalPrice: "",
    services: [
      {
        serviceTitle: "Home Cleaning Service",
        serviceImage:
          "https://codehs.com/uploads/e4bbb02828471aeba80d5b19daa24eca",
        serviceDescription:
          " Our high-quality home cleaning services includes products that are safe for the environment, safe your family, and pets. We take pride in our work by handling and organizing the toughest jobs. Let our company take the stress out of cleaning.",
        servicePrice: "500",
        modalImage:
          "https://codehs.com/uploads/c7fae79066fe4c727e313b55504d4100",
      },
      {
        serviceTitle: "Window Washing Service",
        serviceImage:
          "https://codehs.com/uploads/6b19325e1935ee43e75ab139f32de2e8",
        modalImage:
          "https://tomlewispromaintenance.com/wp-content/uploads/2022/05/Home-Page-Window-Washer-_O.jpg",
        serviceDescription:
          "Our highly trained employees will make your home and business sparkle. Our products are environmentally friendly.",
        servicePrice: "1000",
      },
      {
        serviceTitle: "Move-in/Move-out Service",
        serviceImage:
          "https://codehs.com/uploads/b76d7fc259d2a887e59425a42bb95703",
        modalImage:
          "https://resource.rentcafe.com/image/upload/q_auto,f_auto,c_limit,w_1200/s3/2/10664/076%20one%20bedroom%20apartment.jpg",
        serviceDescription:
          "Moving into a new apartment or home can be a stressful time. So let us help by making your new place clean, free from germs, and allergens.  Moving out can be stressful especially when you must pass inspections. We provide top quality services that will impress the toughest landlord’s expectations.",
        servicePrice: "300",
      },
      {
        serviceTitle: "Maid Services",
        serviceImage:
          "https://codehs.com/uploads/f3ee1e5f008fc8d0157a03a439875174",
        serviceDescription:
          "Full-time maid services that include washing, cleaning, folding, and organizing your daily or weekly needs.",

        servicePrice: "200",
        modalImage:
          "https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4239146.jpg&fm=jpg",
      },
      {
        serviceTitle: "Comercial Cleaning Service",
        serviceImage:
          "https://codehs.com/uploads/2d86d10df16a428e9094e6276dd1aedd",
        modalImage:
          "https://codehs.com/uploads/79238a1bc5c36f52ed8e0176efa38ade",
        servicePrice: "150",
        serviceDescription:
          "Let our company keep your business running smoothly while deep cleaning. We handle all unique situations. ",
      },
      {
        serviceTitle: "Carpet Cleaning Service",
        serviceImage:
          "https://codehs.com/uploads/5b652df4313dd8474aa9e386ac329faa",
        modalImage:
          "https://codehs.com/uploads/5829610366b8c67b94092923e5cccba0",
        servicePrice: "250",
        serviceDescription:
          "Our carpet cleaning services gets deep cleaning right. We offer deep shampooing that cuts through grease, grime, and difficult stains. We are available weekly, weekends, and during emergencies.",
      },
    ],
  };
  displayModal = () => {
    this.setState({
      modalDisplay: true,
    });
  };

  hideModal = () => {
    this.setState({
      modalDisplay: false,
    });
  };

  infoModal = (title, image, desc, price) => {
    this.setState({
      modalTitle: title,
      modalImage: image,
      modalDescription: desc,
      modalPrice: price,
    });
    this.displayModal();
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.services.map((service, index) => (
          <View key={index}>
            <TouchableHighlight
              onPress={() => {
                {
                  this.infoModal(
                    service.serviceTitle,
                    service.modalImage,
                    service.serviceDescription,
                    service.servicePrice
                  );
                  //this.displayModal();
                }
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
        {this.state.modalDisplay ? (
          <ModalComponent
            displayModal={this.state.modalDisplay}
            hideModal={this.hideModal} // Pass the hideModal function to ModalComponent
            title={this.state.modalTitle}
            image={this.state.modalImage}
            description={this.state.modalDescription}
            price={this.state.modalPrice}
          />
        ) : null}
      </View>
    );
  }
}
const ModalComponent = (props) => {
  const [modalVisible, setModalVisible] = useState(props.modalDisplay);
  /* const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false); */
  const toggleModal = () => {
    setModalVisible(!modalVisible);
    props.hideModal();
  };
  return (
    <SafeAreaView style={styles.fill}>
      {/* <Button title="Show" onPress={showModal} /> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <SafeAreaView style={[styles.fill2, styles.grey]}>
          <Button
            title="Close"
            onPress={() => {
              toggleModal();
            }}
          />
        </SafeAreaView>
        <View style={styles.modalContainer}>
          <View style={styles.modalImageContainer}>
            <Image
              style={styles.modalImage}
              source={{
                uri: props.image,
              }}
            />
          </View>
          <View style={styles.modalDescriptionContainer}>
            <Text style={styles.modalTitle}>{props.title}</Text>
            <Text style={styles.modalDescription}>{props.description}</Text>
            <Text style={styles.modalPrice}>Price: ${props.price}</Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  modalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  modalDescription: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginBottom: 10,
  },
  modalImageContainer: {
    height: 2.4 * (deviceHeight / 10),
    width: 8.5 * (deviceWidth / 10),
    marginBottom: 10,
  },
  modalImage: {
    height: 2.4 * (deviceHeight / 10),
    width: 8.5 * (deviceWidth / 10),
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  },
  modalContainer: {
    width: 10 * (deviceWidth / 10),
    height: 10 * (deviceHeight / 10),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  modalDescriptionContainer: {
    width: 8.9 * (deviceWidth / 10),
    height: 3.5 * (deviceHeight / 10),
    backgroundColor: "white",
    marginTop: 20,
    marginBottom: 20,
  },
  fill: { flex: 1 },
  fill2: {
    height: 0.5 * (deviceHeight / 10),
    width: deviceWidth,
  },
  grey: { backgroundColor: "grey" },
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
