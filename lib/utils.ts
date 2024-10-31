/* eslint-disable prettier/prettier */
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeToken = async(token: string) => {
  try {
    await AsyncStorage.setItem("token", token);
  } catch (error) {
    console.error("Error saving token", error);
  }
};

// Function to clear the token on logout
export const clearToken = async () => {
   await AsyncStorage.removeItem('token');
};

export const getToken = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value; // Ensure this returns the actual token
  } catch (error) {
    console.error("Error getting token", error);
    return null; // Ensure you handle errors properly
  }
};
