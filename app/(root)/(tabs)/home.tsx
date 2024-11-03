import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Feather';
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MOCK_RIDERS } from "@/constants/mockdata";
import RideCard from "@/components/RideCard";

const Home = () => {
    return (
        <SafeAreaView className="bg-general-500 h-full">
            <StatusBar style="dark" />
            <View className="bg-white shadow-md w-12 p-2 rounded-full ml-2 mt-2">
                <TouchableOpacity activeOpacity={0.2}>
                <Icon name="menu" size={30} color="#7d7d7d" className=""  />
                </TouchableOpacity>
            </View>
            <FlatList 
            data={MOCK_RIDERS}
            renderItem={({item}) => <RideCard data={item} />}
            />
        </SafeAreaView>
    );
};

export default Home;
