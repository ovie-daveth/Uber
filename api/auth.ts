/* eslint-disable prettier/prettier */
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API_URL = "http://192.168.141.16:8080";
// console.log(API_URL)
const apiClient = axios.create({
  baseURL: API_URL,
});

console.log("AGAIN", API_URL)
// Token handling function
const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    console.log("token", token)
    return token;
  } catch (error) {
    console.error("Error fetching token", error);
    return null;
  }
};

// Add an interceptor to add the Authorization header
apiClient.interceptors.request.use(async (config) => {
  const token = await getToken();
  console.log("inter token", token)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log("config", config)
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Add an interceptor for responses (optional for error handling)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

console.log("passed")

// Export API functions

export const RegisterUser = async (data: any) => {
    try {
      return await apiClient.post("/user/signup", data);
    } catch (error) {
      console.error("Error signing up:", error);
      throw error;
    }
  };
  
  export const LoginUsers = async (data: any) => {
    try {
      return await apiClient.post("/user/login", data);
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };
  
export const GetProfile = async () => {
  try {
    return await apiClient.get("/user/profile");
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw error;
  }
};


export const updateProfile = async (data: any) => {
  try {
    return await apiClient.patch("/user/profile", data);
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error;
  }
};
