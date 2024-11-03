import { View, Text, TouchableOpacity, FlatList, ScrollView } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Feather';
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import GoogleMap from "@/components/MapView";
import GoogleSearchInput from "@/components/GoogleSearchInput";


const Home = () => {
    return (
        <SafeAreaView className="bg-general-500 h-full">
            <StatusBar style="dark" />
            <View className="bg-white shadow-md w-12 p-2 rounded-full ml-2 mt-2 absolute top-10 left-0 z-50">
                <TouchableOpacity activeOpacity={0.2}>
                <Icon name="menu" size={30} color="#7d7d7d" className=""  />
                </TouchableOpacity>
            </View>
            <View>
                <GoogleSearchInput />
            </View>
            <GoogleMap />
            <ScrollView className="">
                <View className="rounded-t-4xl bg-white z-50">

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;


//AIzaSyCBI4eD1dLQtMqmZT_zaRPw0TFG2ILRvLA
