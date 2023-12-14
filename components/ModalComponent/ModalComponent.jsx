import React, { useState } from "react";
import {
  Text,
  View,
  Modal,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
  Dimensions,
} from "react-native";

const ModalComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  /* const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false); */
  const toggleModal = () => {
    setModalVisible(!modalVisible);
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
        <SafeAreaView style={[styles.fill, styles.grey]}>
          <Button title="Hide" onPress={toggleModal} />
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
  setModalVisible(true);
};
//const showModal = () => setModalVisible(true)

export default ModalComponent;

const styles = StyleSheet.create({
  fill: { flex: 1 },
  grey: { backgroundColor: "grey" },
});
