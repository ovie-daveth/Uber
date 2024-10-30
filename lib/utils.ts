/* eslint-disable prettier/prettier */
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeToken = async (token: string) => {
    await AsyncStorage.setItem('token', token);
};

// Function to clear the token on logout
export const clearToken = async () => {
    await AsyncStorage.removeItem('token');
};