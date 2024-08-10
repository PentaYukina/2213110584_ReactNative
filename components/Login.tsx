import { StyleSheet, Text, View, Alert, TextInput, Button } from "react-native";
import React from "react";
import { stylesLogin } from "../styles/styles";
import { useState } from "react";

const Login = (): React.JSX.Element => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email:string):boolean => {
    const recheckemail = /\S+@\S+\.\S+/;
    return recheckemail.test(email);
  }

  const handleSubmit = () => {
    let errorMessage = "";
    /* if (!fullname&&!email) {
      Alert.alert("Error", "Please Enter Email\nPlease Enter Name", [{ text: "OK" }]);
      return;
    } */
    if (!fullname) {
 /*      Alert.alert("Alert", "Please Enter Name", [{ text: "OK" }]);
      return; //break; */
      errorMessage += "Please Enter Name\n";
    }
    if (!email) {
/*       Alert.alert("Alert", "Please Enter Email", [{ text: "OK" }]);
      return; */
      errorMessage += "Please Enter Email\n";
    }else if(!validateEmail(email)){
      errorMessage+="Invalid Email Format\n";
    }
    
    //checkpassword
    if(!password){
      errorMessage += "Please Enter Password";
    }else if(password.length<6){
      errorMessage +="Password must be at lease 6 characters\n";
    }

    if (errorMessage) {
      Alert.alert("Error", errorMessage.trim(), [{ text: "OK" }]);
      return;
    }
    Alert.alert("Alert", "Success", [{ text: "OK" }]);
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
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="SUBMIT" onPress={handleSubmit} />
    </View>
  );
};

export default Login;
