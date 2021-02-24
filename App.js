import React from "react";
import { LocationProvider } from "./context/location-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";

const { Screen, Navigator } = createStackNavigator();

function ScreenNav() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='onboarding'>
        <Screen
          name='onboarding'
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Screen name='home' component={Home} options={{ headerShown: false }} />
        <Screen name='filters' component={Filters} />
      </Navigator>
    </NavigationContainer>
  );
}

const Filters = ({ navigation }) => {
  return (
    <View>
      <Button title='home' onPress={() => navigation.navigate("home")} />
    </View>
  );
};

export default function App() {
  return (
    <LocationProvider>
      <ScreenNav />
    </LocationProvider>
  );
}
