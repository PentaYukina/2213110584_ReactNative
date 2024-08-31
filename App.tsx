import { View, Text } from "react-native";
import React from "react";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CreaePostScreen from "./screens/CreaePostScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = (): React.JSX.Element => {
  const HomeStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <HomeStack.Navigator
        initialRouteName="Home"
        screenOptions={{//Global
          headerStyle: { backgroundColor: "#F7B5CA" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
        }}
      >
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "หน้าหลัก" }}
        />
        <HomeStack.Screen
          name="About"
          component={AboutScreen}
          /* options={{ title: "เกี่ยวกับเรา" ,
            headerStyle:{backgroundColor:'#FFD0D0'},
            headerTintColor:'white',
            headerTitleStyle:{fontWeight:'bold'},
            headerTitleAlign:'center'
          }} */
        />
        <HomeStack.Screen name="CreatePost" component={CreaePostScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
