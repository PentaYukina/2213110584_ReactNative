import { StyleSheet, Text, View, Alert, TextInput, Button } from "react-native";
import React from "react";
import { stylesLogin } from "../styles/styles";
import { useState } from "react";

const Login = (): React.JSX.Element => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [FooterMessage, setFooterMessage] = useState(
    "Thai-Nichi Institute of Technology"
  );

  const handleButtonClick = () => {
    Alert.alert("Please Enter Name");
  };

  return (
    <View style={stylesLogin.container}>
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Name"
        value={fullname}
        onChangeText={setFullname}
      />
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="SUBMIT" onPress={handleButtonClick} />
    </View>
  );
};

export default Login;
