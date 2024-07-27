import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        padding:20,
        borderColor:"#f5f5f5"
    },
    proflieImage:{
        borderRadius:50,
        width:100,
        height:100,
        marginRight:20,
        borderColor:"#9CDBA6",
        borderWidth:3
    },
    profileContainer:{
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        padding:20,
        borderRadius:10,
        backgroundColor:"#50B498",
        elevation:30,
        marginTop:50
    },
    profileName:{
        color:"#77E4C8",
        fontSize:20,
        fontWeight:'bold'
    }
});

export default styles