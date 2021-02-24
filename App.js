import React from "react";
import ScreenNav from "./components/HOC/ScreenNav";
import { LocationProvider } from "./context/location-context";
export default function App() {
  return (
    <LocationProvider>
      <ScreenNav />
    </LocationProvider>
  );
}
