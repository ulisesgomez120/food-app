import React from "react";
import ScreenNav from "./components/HOC/ScreenNav";

export default function App() {
  return (
    <LocationProvider>
      <ScreenNav />
    </LocationProvider>
  );
}
