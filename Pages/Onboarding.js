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
import * as SplashScreen from "expo-splash-screen";
import { getData } from "../util";
import {
  useLocationDispatch,
  getLocation,
  useLocationState,
} from "../context/location-context";

const Onboarding = ({ navigation }) => {
  const locDispatch = useLocationDispatch();
  const locState = useLocationState();

  const preventSplash = async () => {
    try {
      await SplashScreen.preventAutoHideAsync()
        .then((res) => res)
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
    const completedOnboarding = await getData("completedOnboarding");
    if (completedOnboarding === null) {
      getLocation(locDispatch);
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
    <SafeAreaView style={styles.container}>
      <Screens></Screens>
    </SafeAreaView>
  );
};
const Screens = () => {
  return <View style={styles.containerS}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  containerS: {
    flex: 1,
    backgroundColor: "red",
  },
});

export default Onboarding;
