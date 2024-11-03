import { View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MOCK_RIDERS } from "@/constants/mockdata";
import RideCard from "@/components/RideCard";
import { icons, images } from "@/constants";
import { clearToken } from "@/lib/utils";
import { router } from "expo-router";


const Rides = () => {

    const [loading, setLoading] = useState({
        logoutLoading: false,
        loading: false,
    })
    // const loading = loading.loading;
    const Logout = async() => {
        // Implement logout logic here
        setLoading({
            logoutLoading: true,
            loading: false,
        })
        // Clear the token and navigate to the login screen
        // Example:
        // await AsyncStorage.removeItem('token');
        // await AsyncStorage.removeItem('user');

        // You can use the clearToken function from the utils library to clear the token
        // clearToken();
        // setTimeout(() => {
        //     setLoading({
        //         logoutLoading: true,
        //         loading: false,
        //     })
        // }, 1000);
         await clearToken();  
         setTimeout(() => {
            setLoading({
                logoutLoading: false,
                loading: false,
            })
         }, 1000);

        // Navigate to the login screen or perform necessary logout actions

        router.replace("/(auth)/signin")

    }
    return (
        <SafeAreaView className="bg-general-500 h-full">
        <StatusBar style="dark" />

        <FlatList 
             data={MOCK_RIDERS}
            //data={[]}
            renderItem={({ item }) => <RideCard data={item} />}
            keyExtractor={(item) => item.ride_id}
            className="p-1"
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
                paddingBottom: 100
            }}
            ListEmptyComponent={() => (
                <View className="flex flex-col justify-center items-center h-full">
                    {
                        loading.loading? (
                            <ActivityIndicator size="large" color="#0000ff" />
                        ) : (
                            <View className="flex items-center flex-col h-full justify-center w-full">
                                <Image source={images.noResult} alt="no recent ride" className=" w-40 h-40" resizeMode="contain" />
                                <Text className="text-sm">No rides found. Please check back later.</Text>
                            </View>
                            
                        )
                    }
                </View>
            )}
            ListHeaderComponent={() => (
                <View className="flex flex-row items-center justify-between my-5 px-5 bg-white py-2">
                    <Text className="text-sm font-JakartaBold text-neutral-600">Recent rides </Text>
                    <TouchableOpacity className="justify-center items-center w-10 h-10 rounded-full bg-white" disabled={loading.logoutLoading} onPress={Logout} >
                    {
                        loading.logoutLoading? (
                            <ActivityIndicator size="small" color="#0000ff" />
                        ) : (
                            <Image source={icons.out} alt="logout" className="w-4 h-4" resizeMode="contain" />
                        )
                    }
                    </TouchableOpacity>
                </View>
            )}
        />
    </SafeAreaView>
    );
};

export default Rides;
