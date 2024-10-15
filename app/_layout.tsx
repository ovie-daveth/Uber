import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="index"
    >
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default RootLayout;
