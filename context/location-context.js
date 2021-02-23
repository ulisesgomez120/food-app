import React from "react";
import { getData } from "../util";

const LocationState = React.createContext();
const LocationDispatch = React.createContext();

const LocationProvider = ({ children }) => {
  const [state, dispatch] = React.useState("austin.tx");
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

const getLocation = async (dispatch) => {
  const location = await getData("location", dispatch);
  return location;
};
const setLocation = async () => {};
export {
  LocationProvider,
  useLocationDispatch,
  useLocationState,
  getLocation,
  setLocation,
};
