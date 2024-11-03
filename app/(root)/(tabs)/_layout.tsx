/* eslint-disable prettier/prettier */
import React from "react";
import { Tabs } from "expo-router";
import Icon from 'react-native-vector-icons/FontAwesome5';

const _layout = () => {
    return (
        <Tabs
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName;

                // Set the icons for each tab
                if (route.name === 'home') {
                    iconName = 'home'; // Filled home icon
                } else if (route.name === 'chat') {
                    iconName = 'comment-dots'; // Filled chat icon
                } else if (route.name === 'profile') {
                    iconName = 'user'; // Filled user icon
                } else if (route.name === 'rides') {
                    iconName = 'car'; // Filled car icon
                }

                // Return the icon component
                return  <Icon name={iconName}  size={size} color={color} />;
            },
            tabBarStyle: {
                position: 'absolute', 
                bottom: 20, 
                left: 20,
                right: 20,
                elevation: 10, // Shadow for Android
                shadowColor: '#000', // Shadow color for iOS
                shadowOffset: { width: 0, height: 5 }, 
                shadowOpacity: 0.2, 
                shadowRadius: 10, 
                backgroundColor: 'white', 
                borderRadius: 15, 
                paddingVertical: 10,
                marginBottom: 10 
            },
            tabBarActiveTintColor: '#000', // Active tab color
            tabBarInactiveTintColor: 'gray',  // Inactive tab color
            headerShown: false, // Hide the header
        })}
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
