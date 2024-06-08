import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeValue = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log(`Item stored ${key} ${value}`);
  } catch (e) {
    // saving error
  }
};

export const storeObject = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getValue = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return null;
  }
};

export const getObject = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
