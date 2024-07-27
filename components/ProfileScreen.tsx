import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import styles from '../styles/styles';

const ProfileScreen = ():React.JSX.Element => {
    const proflieImage = require("../assets/01.jpg");
  return (
    <View style={styles.container}>
        <View style={styles.profileContainer}>
            <Image source={proflieImage} style={styles.proflieImage}/>
            <Text style={styles.profileName}>Pattarapa Janstamp</Text>
        </View>
    </View>
  )
}

export default ProfileScreen