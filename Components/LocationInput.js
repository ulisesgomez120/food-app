//manual text input for updating location
import React from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const LocationInput = ({ setLocation }) => {
  const inputRef = React.createRef();

  return (
    <KeyboardAvoidingView
      style={styles.kbavoid}
      keyboardVerticalOffset={64}
      behavior={Platform.OS == "ios" ? "padding" : "height"}>
      <TextInput
        ref={inputRef}
        style={{ backgroundColor: "blue", alignSelf: "stretch", height: 50 }}
        onChangeText={(text) => (inputRef.current.value = text)}
        onSubmitEditing={() => setLocation(inputRef.current.value)}
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
