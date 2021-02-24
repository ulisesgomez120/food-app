import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../pages/Home";
import Onboarding from "../../pages/Onboarding";
import * as SplashScreen from "expo-splash-screen";
import { getData } from "../../util";
import {
  useLocationDispatch,
  getLocation,
  useLocationState,
} from "../../context/location-context";

const { Screen, Navigator } = createStackNavigator();

export default function ScreenNav() {
  const [initialRoute, setInitialRoute] = React.useState("onboarding");
  // const locDispatch = useLocationDispatch();
  // const locState = useLocationState();

  // const preventSplash = async () => {
  //   try {
  //     await SplashScreen.preventAutoHideAsync()
  //       .then((res) => res)
  //       .catch((err) => console.log(err));
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   const completedOnboarding = await getData("completedOnboarding");
  //   if (completedOnboarding === null) {
  //     console.log("k");
  //     getLocation(locDispatch);
  //     nav.navigate("home");
  //     SplashScreen.hideAsync();
  //   } else {
  //     SplashScreen.hideAsync();
  //   }
  // };
  // React.useEffect(() => {
  //   preventSplash();
  // }, []);

  return (
    <NavigationContainer>
      <Navigator initialRouteName='onboarding'>
        <Screen
          name='onboarding'
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Screen name='home' component={Home} options={{ headerShown: false }} />
        <Screen name='filters' component={Filters} />
      </Navigator>
    </NavigationContainer>
  );
}

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
});
