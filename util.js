import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value, serialize = JSON.stringify) => {
  try {
    await AsyncStorage.setItem(key, serialize(value));
  } catch (e) {
    throw Error(e);
  }
};

export const getData = async (key, callback, deserialize = JSON.parse) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      const deserialized = deserialize(value);
      if (callback) {
        callback(deserialized);
        return deserialized;
      }
      return deserialized;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e, "err");
  }
};

export const shuffleArray = (array) => {
  let copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

export const getAll = () => {
  AsyncStorage.getAllKeys()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
