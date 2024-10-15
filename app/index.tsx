import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const index = () => {
  return (
    <SafeAreaView className="h-full bg-black">
      <StatusBar style="light" />
      <View className="flex-1 items-center justify-center">
        <Text className="text-white ">Uber Clone</Text>
      </View>
    </SafeAreaView>
  );
};

export default index;
