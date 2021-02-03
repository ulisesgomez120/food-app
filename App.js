import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Screen, Navigator } = createStackNavigator();

export default function App() {
  console.log(Math.random());
  return (
    <NavigationContainer>
      <Navigator initialRouteName='home'>
        <Screen name='home' component={Home} options={{ headerShown: false }} />
        <Screen name='filters' component={Filters} />
      </Navigator>
    </NavigationContainer>
  );
}
const Home = ({ navigation }) => {
  return (
    <View style={{ marginTop: 44 }}>
      <Text>Home</Text>
      <Button title='Filters' onPress={() => navigation.navigate("filters")} />
    </View>
  );
};
const Filters = ({ navigation }) => {
  return (
    <View>
      <Button title='home' onPress={() => navigation.navigate("home")} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  flowBtn: {
    backgroundColor: "gray",
    padding: 44,
  },
});
