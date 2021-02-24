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
import { getData, storeData, shuffleArray } from "../util";
import LocationInput from "../components/LocationInput";

const Screens = () => {
  return <View style={styles.containerS}></View>;
};
const Onboarding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Screens></Screens>
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
    backgroundColor: "red",
  },
});

export default Onboarding;
