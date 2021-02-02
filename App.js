import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  console.log(Math.random());
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.flowBtnSecondary, styles.flowBtn]}>
        <Text>I'm Picky</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.flowBtn}>
        <Text>I'm Ready</Text>
      </TouchableOpacity>
      <StatusBar style='auto' />
    </View>
  );
}

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
