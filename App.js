import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//
import AsyncStorage from "@react-native-async-storage/async-storage";

const { Screen, Navigator } = createStackNavigator();

export default function App() {
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
  const [test, setTest] = React.useState("not");

  React.useEffect(() => {
    storeData("works");
  }, []);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("test", value);
    } catch (e) {
      // saving error
      throw Error(e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("test");
      if (value !== null) {
        // value previously stored
        setTest(value);
      }
    } catch (e) {
      // error reading value
      throw Error(e);
    }
  };

  return (
    <View style={{ marginTop: 44 }}>
      <Text>Home {test}</Text>
      <Button title='Filtersx' onPress={() => getData()} />
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
