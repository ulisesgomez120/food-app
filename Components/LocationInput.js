//manual text input for updating location
import React from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {
  setLocationLocal,
  useLocationDispatch,
} from "../context/location-context";
const LocationInput = () => {
  const inputRef = React.createRef();
  const setLoc = useLocationDispatch();
  const handleLocationSubmit = (text) => {
    setLoc(text);
    setLocationLocal(text);
  };
  return (
    <KeyboardAvoidingView
      style={styles.kbavoid}
      keyboardVerticalOffset={64}
      behavior={Platform.OS == "ios" ? "padding" : "height"}>
      <TextInput
        ref={inputRef}
        style={{ backgroundColor: "blue", alignSelf: "stretch", height: 50 }}
        onChangeText={(text) => (inputRef.current.value = text)}
        onSubmitEditing={() => handleLocationSubmit(inputRef.current.value)}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  kbavoid: {
    paddingVertical: 12,
    flex: 0.3,
    backgroundColor: "gold",
  },
});

export default LocationInput;
