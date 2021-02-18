import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import { yelpCall } from "../yelpConfig";
import { getData, storeData, shuffleArray } from "../util";
import LocationInput from "../Components/LocationInput";

export default Home = ({ navigation }) => {
  const getLocation = async () => {
    const loc = await getData("location");
    return loc || "Austin,TX";
  };
  const [choices, setChoices] = React.useState([]);
  const [status, setStatus] = React.useState("idle");
  const [filters, setFilters] = React.useState(["sushi", "mexican"]);
  const [location, setLocation] = React.useState(getLocation);

  let searchParams = {
    term: "food",
    limit: 3,
    offset: 0,
    open_now: true,
  };
  const formatLocation = () => {
    if (typeof location === "string") {
      return { location };
    }
    return { lat: location.lat, long: location.long };
  };
  // React.useEffect(() => {
  //   //convert to async function
  //   getResturants();
  // }, [filters]);

  const getResturants = async () => {
    const loc = formatLocation();
    if (filters.length === 0) {
      yelpCall
        .get("/businesses/search?", {
          params: { ...searchParams, ...loc },
        })
        .then((d) => {
          setChoices(d.data.businesses.splice(0, 3));
          storeData(JSON.stringify(d.data.businesses));
        })
        .catch((e) => {
          throw Error(e);
        });
      return;
    }
    let all = filters.map((term) => {
      let filterParams = { ...searchParams, ...loc, term };
      return yelpCall
        .get("/businesses/search?", {
          params: filterParams,
        })
        .then((d) => d.data.businesses)
        .catch((e) => {
          throw Error(e);
        });
    });
    return Promise.all(all)
      .then((val) => {
        let shuf = shuffleArray(val.flat());
      })
      .catch((e) => {
        throw Error(e);
      });
  };
  // const storeData = async (value) => {
  //   try {
  //     await AsyncStorage.setItem("choices", value);
  //   } catch (e) {
  //     throw Error(e);
  //   }
  // };

  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("choices");
  //     if (value !== null) {
  //       const parsedValue = JSON.parse(value);
  //       const newChoices = parsedValue.splice(0, 3);
  //       storeData(JSON.stringify(parsedValue));
  //       return setChoices(newChoices);
  //     }
  //   } catch (e) {
  //     throw Error(e);
  //   }
  // };
  // function shuffleArray(array) {
  //   let copy = [...array];
  //   for (let i = copy.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [copy[i], copy[j]] = [copy[j], copy[i]];
  //   }
  //   return copy;
  // }
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
          }}>
          <Text>{choice.name}</Text>
        </TouchableOpacity>
      </View>
    );
  });
  console.log(location, "home");
  return (
    <SafeAreaView style={{ marginTop: 50, flex: 1 }}>
      <View style={{ flex: 3, backgroundColor: "red" }}>{choicesJsx}</View>

      <LocationInput setLocation={setLocation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  choice: {
    backgroundColor: "pink",
  },
});
