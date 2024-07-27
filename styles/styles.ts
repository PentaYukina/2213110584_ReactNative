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
        borderColor:"#91DDCF",
        borderWidth:4
    },
    profileContainer:{
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        padding:20,
        borderRadius:10,
        backgroundColor:"#D6EFD8",
        elevation:30,
        marginTop:50
    },
    profileName:{
        color:"#37B7C3",
        fontSize:20,
        fontWeight:'bold'
    }
});

export default styles