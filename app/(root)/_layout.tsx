/* eslint-disable prettier/prettier */
import React from "react";
import { Tabs } from "expo-router";

export default function _layout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: { display: 'none' }  // Hide the tab bar
            }}
        >
            <Tabs.Screen name="home" />
         
        </Tabs>
    );
}
