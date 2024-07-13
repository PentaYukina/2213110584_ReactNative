import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AppFooter = (): React.JSX.Element => {
  const hello = "Hello TNI Footer";
  const hello2 = <Text>Hello JSX</Text>;
  const ifLogin = true;
  return (
    <View>
      <Text style={styles.myText}>
        {hello} Date:{new Date().toLocaleTimeString()}
      </Text>
      {hello2}
      {ifLogin && <Text>Welcome Boss</Text>}
      {ifLogin==true
      ? <Text>Wecome Marry</Text>
      : <Text>ยังไม่ได้ Login</Text>}
    </View>
  );
};

export default AppFooter;

const styles = StyleSheet.create({
  myText: {
    color: "red",
  },
});
