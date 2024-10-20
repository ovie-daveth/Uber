/* eslint-disable prettier/prettier */
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
    return (
        <>
            <StatusBar style="dark" />
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="welcome"
            >
                <Stack.Screen name="welcome" />
                <Stack.Screen name="signup" />
                <Stack.Screen name="signin" />
            </Stack>
        </>
    );
}
