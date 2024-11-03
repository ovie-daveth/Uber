import { View, Text } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Feather';
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Home = () => {
    return (
        <SafeAreaView>
            <StatusBar style="dark" />
            <View>
            <Icon name="home" size={30} color="#000"  />
        </View>
        </SafeAreaView>
    );
};

export default Home;
