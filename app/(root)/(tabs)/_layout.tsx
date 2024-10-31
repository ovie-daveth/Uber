/* eslint-disable prettier/prettier */
import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const _layout = () => {
    return (
        <Tabs
            initialRouteName="home"
        >
            <Tabs.Screen
                name="home"
            />
            <Tabs.Screen
                name="chat"
            />
            <Tabs.Screen
                name="profile"
            />
            <Tabs.Screen
                name="rides"
            />
        </Tabs>
    );
};

export default _layout;
