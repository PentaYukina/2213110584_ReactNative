// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";

import { View, Text, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import Toast from "react-native-toast-message";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CreaePostScreen from "./screens/CreaePostScreen";
import MenuScreen from "./screens/MenuScreen";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";

import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "./screens/LoginScreen";
import { store } from "./redux-toolkit/store";
import { useAppDispatch, useAppSelector } from "./redux-toolkit/hooks";
import {
  selectAuthState,
  setIsLoading,
  setIsLogin,
  setProfile,
} from "./auth/auth-slice";
import { getProfile } from "./services/auth-service";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CameraScreen from "./screens/CameraScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const CameraStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

function TabContainer() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";
          if (route.name === "HomeStack") {
            iconName = focused
              ? "home"
              : "home-outline";
          } else if (route.name === "CameraStack") {
            iconName = focused ? "camera" : "camera-outline";
          }
          // You can return any component that you like here!​
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "pink",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarActiveBackgroundColor:'#D1E9F6'
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{ tabBarLabel: "หน้าหลัก" }}
      />
      <Tab.Screen
        name="CameraStack"
        component={CameraStackScreen}
        options={{ tabBarLabel: "กล้อง" }}
      />
    </Tab.Navigator>
  );
}

function CameraStackScreen() {
  return (
    <CameraStack.Navigator
      initialRouteName="Camera"
      screenOptions={{
        //Global
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <CameraStack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ title: "Camera" }}
      />
    </CameraStack.Navigator>
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        //Global
        // headerStyle: { backgroundColor: "#F7B5CA" },
        // headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold" },
        // headerTitleAlign: "center",
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        // options={{ title: "หน้าหลัก" }}
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
      {/* <HomeStack.Screen name="CreatePost" component={CreaePostScreen} /> */}
    </HomeStack.Navigator>
  );
}

function ProductStackScreen() {
  return (
    <ProductStack.Navigator
      initialRouteName="Products"
      screenOptions={{
        //Global
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <ProductStack.Screen name="Products" component={ProductScreen} />
      <ProductStack.Screen name="Details" component={DetailScreen} />
    </ProductStack.Navigator>
  );
}

function LoginStackScreen() {
  return (
    <LoginStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        //Global
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <LoginStack.Screen name="Login" component={LoginScreen} />
    </LoginStack.Navigator>
  );
}

const App = (): React.JSX.Element => {
  //useAppSelector to pull state from store
  const { isLogin, isLoading } = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  const checking = async () => {
    try {
      dispatch(setIsLoading(true));
      const response = await getProfile();
      /* if (response?.status === 200) {
        dispatch(setIsLogin(true));
      } */
      if (response?.data.data.user) {
        dispatch(setIsLogin(true));
        dispatch(setProfile(response.data.data.user));
      } else dispatch(setIsLogin(false));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      checking();
    }, [])
  );

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="lue" />
      </View>
    );
  }

  return (
    <>
      <HeaderButtonsProvider stackType="native">
        {isLogin ? (
          <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <MenuScreen {...props} />}
          >
            <Drawer.Screen name="Home" component={TabContainer} />
            <Drawer.Screen name="ProductStack" component={ProductStackScreen} />
          </Drawer.Navigator>
        ) : (
          <LoginStackScreen />
        )}
      </HeaderButtonsProvider>
      <Toast />
    </>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};
export default AppWrapper;
