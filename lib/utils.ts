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


export const formatDate = (datestring: string): string => {
  const date = new Date(datestring);
  const day = date.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const month = monthNames[date.getMonth()];	
  const year = date.getFullYear();	

  return `${day < 10 ? "0" + day : day}, ${month} ${date.getDate()}, ${year}`;	
}

// export const formatTime = (timeString: number): string => {
//   const time = new Date(timeString);
//   const hours = time.getHours();
//   const minutes = time.getMinutes();
//   const ampm = hours >= 12? "PM" : "AM";
//   return `${hours % 12 || 12}:${minutes < 10? "0" + minutes : minutes} ${ampm}`;
// }

export const formatTime = (time: number): string => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${hours > 0? `${hours}h ` : ""}${minutes > 0? `${minutes}m ` : ""}${seconds}s`;

  // Example output: 1h 20m 45s
}
