import { StyleSheet, Text, View, Pressable, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import WeatherBangkok from "./WeatherBangkok";
import WeatherLondon from "./WeatherLondon";

const WeatherApp = (): React.JSX.Element => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCity, setSelectCity] = useState("");

  const toggleModal = (city: string) => {
    setSelectCity(city);
    setModalVisible(true);
  };

  const renderWeatherComponent = () => {
    if (selectedCity === "London") {
      return <WeatherLondon />;
    } else if (selectedCity === "Bangkok") {
      return <WeatherLondon />;
    }
    return null;
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Weather App</Text>
      <Pressable
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>LONDON</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>BANGKOK</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      ></Modal>
      <View  style={styles.modalBackground}>
        <View style={styles.modalContainer}>
            {renderWeatherComponent()}
        <TouchableOpacity style={styles.closeButton}>
            onPress={() => setModalVisible(!modalVisible)}
        </TouchableOpacity>
          
            <Text style={styles.closeButtonText}>Hide Modal</Text>
          </View>
        </View>
    </View>
  );
};

export default WeatherApp;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    backgroundColor: "#3AA6B9",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#f9f9f9",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  closeButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
