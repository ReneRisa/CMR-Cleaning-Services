import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

const DropdownMenu = ({ options, selectedOption, onSelect }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const image = {
    uri: "https://codehs.com/uploads/de7165a1772822690de54172961a54f6",
  };

  return (
    <View style={styles.dropdownContainer}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <TouchableOpacity onPress={toggleModal} style={styles.dropdownButton}>
          <Text style={styles.dropdownButtonText}></Text>
        </TouchableOpacity>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible}
          onRequestClose={toggleModal}
        >
          <View style={styles.modalContainer}>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    onSelect(item);
                    toggleModal();
                  }}
                  style={styles.modalOption}
                >
                  <Text style={styles.modalOptionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Modal>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    width: 0.9 * (deviceWidth / 10),
    height: 0.5 * (deviceHeight / 10),
    backgroundColor: "white",
  },
  dropdownButton: {
    padding: 10,
  },
  dropdownButtonText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0.5, 0.5, 0.5, 1.5)",
  },
  modalOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  modalOptionText: {
    fontSize: deviceHeight / 20,
    color: "white",
  },
});

// Example usage
export default function App() {
  const options = ["Home", "Services", "About Us", "Our Job", "Contact Us"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    alert("This option will take to " + option + " section");
  };

  return (
    <View style={styles.container}>
      <DropdownMenu
        options={options}
        selectedOption={selectedOption}
        onSelect={handleSelect}
      />
    </View>
  );
}
