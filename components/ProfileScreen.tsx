import { StyleSheet, Text, View ,Image,Button} from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/styles';

const ProfileScreen = ():React.JSX.Element => {
    const proflieImage = require("../assets/01.jpg");
    const proflieImage1 = require("../assets/02.jpg");
    const [name,setName] = useState("Pattarapa Janstamp");
    const [image,setImage] = useState(proflieImage);
    const handleChangeName = ()=>{
        setName("New Name")
    }
    const handleChangeImage = ()=>{
        setImage(proflieImage1)
    }
  return (
    <View style={styles.container}>
        <View style={styles.profileContainer}>
            <Image source={image} style={styles.proflieImage}/>
            <View>
            <Text style={styles.profileName}>{name}</Text>
            <Button title = "Change Name" onPress={handleChangeName}/>
            <Text>{"\n"}</Text>
            <Button title = "Change Image" onPress={handleChangeImage}/>
            </View>
        </View>
    </View>
  )
}

export default ProfileScreen