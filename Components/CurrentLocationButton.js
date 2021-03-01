//get current location based on phone's permission
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  setLocationLocal,
  useLocationDispatch,
} from "../context/location-context";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";

const CurrentLocationButton = () => {
  const setLoc = useLocationDispatch();
  const getCurrentLocation = () => {
    Location.getPermissionsAsync()
      .then((val) => {
        if (val.granted) {
          Location.getCurrentPositionAsync()
            .then(({ coords: { latitude, longitude } }) => {
              setLoc({ latitude, longitude });
              setLocationLocal({ latitude, longitude });
            })
            .catch((e) => console.log(e, "getCurrent"));
        } else {
          Location.requestPermissionsAsync()
            .then((val) => {
              Location.getCurrentPositionAsync().then(
                ({ coords: { latitude, longitude } }) => {
                  setLoc({ latitude, longitude });
                  setLocationLocal({ latitude, longitude });
                }
              );
            })
            .catch((e) => console.log(e, "requestPermi"));
        }
      })
      .catch((e) => console.log(e, "hasService"));
  };
  return (
    <TouchableOpacity onPress={() => getCurrentLocation()}>
      <Ionicons name='location-sharp' size={28} color='steelblue' />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default CurrentLocationButton;
