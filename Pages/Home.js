import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { yelpCall } from "../yelpConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default Home = ({ navigation }) => {
  const [choices, setChoices] = React.useState([]);

  React.useEffect(() => {
    //convert to async function
    yelpCall
      .get("/businesses/search?", {
        params: {
          term: "sushi+mexican",
          location: "Austin,TX",
          limit: 20,
          offset: 0,
        },
      })
      .then((d) => {
        console.log(d);
        setChoices(d.data.businesses.splice(0, 3));
        storeData(JSON.stringify(d.data.businesses));
      })
      .catch((e) => {
        throw Error(e);
      });
  }, []);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("choices", value);
    } catch (e) {
      // saving error
      throw Error(e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("choices");
      if (value !== null) {
        const parsedValue = JSON.parse(value);
        const newChoices = parsedValue.splice(0, 3);
        storeData(JSON.stringify(parsedValue));
        return setChoices(newChoices);
      }
    } catch (e) {
      // error reading value
      throw Error(e);
    }
  };
  const choicesJsx = choices.map((choice) => {
    return (
      <View key={choice.id} style={styles.choice}>
        <TouchableOpacity
          onPress={() => {
            let copy = [...choices];
            copy.shift();
            if (copy.length === 0) {
              getData()
                .then((res) => res)
                .catch((e) => e);

              return;
            }
            setChoices(copy);
            return copy;
          }}>
          <Text>{choice.name}</Text>
        </TouchableOpacity>
      </View>
    );
  });
  return (
    <View style={{ marginTop: 44 }}>
      <Text>Home </Text>
      {choicesJsx}
    </View>
  );
};

const styles = StyleSheet.create({
  choice: {
    backgroundColor: "pink",
  },
});
