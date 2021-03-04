import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import { yelpCall } from "../yelpConfig";
import LocationInput from "../components/LocationInput";
import CurrentLocationButton from "../components/CurrentLocationButton";
import * as SplashScreen from "expo-splash-screen";
import { getData, storeData } from "../util";
import {
  useLocationDispatch,
  getLocationLocal,
  useLocationState,
} from "../context/location-context";
import { createStackNavigator } from "@react-navigation/stack";

import { getAll } from "../util";
const onboardingNav = createStackNavigator();

const Onboarding = ({ navigation }) => {
  const locDispatch = useLocationDispatch();
  const preventSplash = async () => {
    try {
      await SplashScreen.preventAutoHideAsync()
        .then((res) => res)
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
    const completedOnboarding = await getData("completedOnboarding");
    if (completedOnboarding !== null) {
      getLocationLocal(locDispatch);
      console.log("completedOnboarding ln39 ");
      navigation.navigate("home");
      SplashScreen.hideAsync();
    } else {
      SplashScreen.hideAsync();
    }
  };

  React.useEffect(() => {
    preventSplash();
  }, []);

  return (
    <onboardingNav.Navigator>
      <onboardingNav.Screen
        name='welcome'
        component={WelcomeOnB}
        options={{ headerShown: false }}
      />
      <onboardingNav.Screen
        name='enterLocation'
        component={EnterLocation}
        options={{ headerShown: false }}
      />
    </onboardingNav.Navigator>
  );
};
const WelcomeOnB = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text> WElCOME</Text>
      <Button title='keys' onPress={() => getAll()}></Button>
      <Button
        title='next'
        onPress={() => navigation.navigate("enterLocation")}></Button>
    </SafeAreaView>
  );
};
const EnterLocation = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerS}>
      <Text> LOCATION </Text>
      <LocationInput />
      <CurrentLocationButton />
      <Button
        title='complete'
        onPress={() => {
          storeData("completedOnboarding", true);
          navigation.navigate("home");
        }}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  containerS: {
    flex: 1,
    backgroundColor: "goldenrod",
  },
});

export default Onboarding;
