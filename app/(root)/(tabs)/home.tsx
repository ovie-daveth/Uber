import { View, Text } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Feather';

const Home = () => {
    return (
        <View>
            <Text>This is home</Text>
            <Icon name="home" size={30} color="#000"  />
        </View>
    );
};

export default Home;
