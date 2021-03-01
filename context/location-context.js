import React from "react";
import { getData, storeData } from "../util";

const LocationState = React.createContext();
const LocationDispatch = React.createContext();

const LocationProvider = ({ children }) => {
  const [state, dispatch] = React.useState("");
  return (
    <LocationState.Provider value={state}>
      <LocationDispatch.Provider value={dispatch}>
        {children}
      </LocationDispatch.Provider>
    </LocationState.Provider>
  );
};

const useLocationState = () => {
  const context = React.useContext(LocationState);
  if (context === undefined) {
    throw new Error("useLocationState must be used within a LocationProvider");
  }
  return context;
};

const useLocationDispatch = () => {
  const context = React.useContext(LocationDispatch);
  if (context === undefined) {
    throw new Error(
      "useLocationDispatch must be used within a LocationProvider"
    );
  }
  return context;
};

const getLocationLocal = async (dispatch) => {
  const location = await getData("location", dispatch);
  return location;
};
const setLocationLocal = async (location) => {
  storeData("location", location);
};
export {
  LocationProvider,
  useLocationDispatch,
  useLocationState,
  getLocationLocal,
  setLocationLocal,
};
