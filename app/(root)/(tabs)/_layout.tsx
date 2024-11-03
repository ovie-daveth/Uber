/* eslint-disable prettier/prettier */
import React from "react";
import { Tabs } from "expo-router";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View } from "react-native";

const _layout = () => {

    const TabIconView = ({icon,color, size, focus}: any) => {
        return <View className={`flex flex-row justify-center items-center rounded-full ${focus ? "bg-general-400":""}`}>
            <View className={` rounded-full w-10 h-10 items-center justify-center ${focus ? "bg-general-400":""}`}>
            <Icon name={icon} size={15} color={color} />
            </View>
        </View>;
    }
    return (
        <Tabs
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size, focused }) => {
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
                return  <TabIconView icon={iconName} color={color} size={size} focus={focused} />;
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
                backgroundColor: '#ffff', 
                borderRadius: 100, 
                paddingVertical: 2,
                paddingHorizontal: 5,
                marginBottom: 10 ,
                height: 60,
            },
            tabBarActiveTintColor: '#fff', // Active tab color
            tabBarInactiveTintColor: 'grey',  // Inactive tab color
            tabBarLabelStyle: {
                display: 'none',
            },
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
