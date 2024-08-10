import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { React, useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

const FlatListcallBackend = ():React.JSX.Element => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  
  //กำหนด useEffect
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  //ฟังก์ชัน _renderItem สำหรับ FlatList
const _renderItem = ({item}:{item:User}) => (
  <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
  </View>
)

  return (
    <View style={styles.container}>
      {loading?(//ถ้ายังโหลดข้อมูลอยู่จะแสดง ActivityIndicator
        <ActivityIndicator size="large" color="red"/>
      ):(//ถ้าโหลดข้อมูลมาแล้วจะแสดง FlatList
        <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={item=>item.id.toString()}
        />

      )}
    </View>
  );
};

export default FlatListcallBackend;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 50,
  },
  item: {
    backgroundColor: "#91DDCF",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
});
