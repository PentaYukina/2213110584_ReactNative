import { StyleSheet, Text, View ,Image,Button} from 'react-native'
import React, { useState } from 'react'
import {stylesProfile, stylesLogin} from '../styles/styles'
import Login from './Login'

const ProfileScreen = ():React.JSX.Element => {
    const proflieImage = require("../assets/01.jpg");
    const proflieImage1 = require("../assets/02.jpg");
    const [name,setName] = useState("Pattarapa Janstamp");
    const [image,setImage] = useState(proflieImage);
    const handleChangeName = ()=>{
        setName(name == "Pattarapa Janstamp" ? "June" : "Pattarapa Janstamp")
    }
    const handleChangeImage = ()=>{
        setImage(image == proflieImage1 ? proflieImage : proflieImage1 )
    }
  return (
    <View style={stylesProfile.container}>
        <View style={stylesProfile.profileContainer}>
            <Image source={image} style={stylesProfile.proflieImage}/>
            <View>
            <Text style={stylesProfile.profileName}>{name}</Text>
            <Button title = "Change Name" onPress={handleChangeName}/>
            <Text>{"\n"}</Text>
            <Button title = "Change Image" onPress={handleChangeImage}/>
            </View>
        </View>
            <Login></Login>
    </View>
  )
}

export default ProfileScreen