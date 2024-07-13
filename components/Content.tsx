import { StyleSheet, Text, View,Alert,Button } from 'react-native'
import React from 'react'

type Content = {
    name:string;
  };

const Content = ({name}: Content): React.JSX.Element => {
    const onClickMe = ()=>{
        Alert.alert("Hello",name);
      }
    return (
    <View style={styles.content}>
        <Text style={styles.text}>Message from App.tsx</Text>
      <Button
        title="Click Me"
        onPress={onClickMe}
        color="blue"
      />
    </View>
  )
}

export default Content

const styles = StyleSheet.create({
    content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    text: {
    fontSize: 18,
    marginBottom: 20,
    },
    });