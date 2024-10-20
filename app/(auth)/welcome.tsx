/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";
import WelcomeScreen from "@/components/WelcomeScreen";

const Welcome = () => {
    const swiperRef = useRef<Swiper>(null);
    const [active, setIsActive] = useState(1);
    const isLastSlide = active === onboarding?.length - 1;

    console.log(isLastSlide)
    return (
        <SafeAreaView className="flex h-full  items-center justify-between bg-white">
            <StatusBar style="dark" />
            <TouchableOpacity
                onPress={() => {
                    router.replace("/(auth)/signup");
                }}
                className="w-fit flex justify-end items-end p-5 absolute right-2 top-10 z-50"
            >
                <Text className="text-black text-md font-Jakarta">Skip</Text>
            </TouchableOpacity>

            <Swiper
                ref={swiperRef}
                loop={false}
                scrollEnabled={true}  // Enable smooth scroll
                removeClippedSubviews={false}  // Keep the performance higher
                showsPagination={true}  // Show dots for pagination
                autoplay={false}  // No auto-play, but you can enable if needed
                dot={
                    <View className="w-5 h-[4px] mx-1 mb-10 bg-[#E2E8F0] rounded-full"></View>
                }
                activeDot={
                    <View className="w-5 h-[4px] mx-1 mb-10 bg-[#0286FF] rounded-full"></View>
                }
                onIndexChanged={(index) => setIsActive(index)}
            >
                {onboarding.map((item, index) => (
                    <WelcomeScreen data={item} key={index} swiperRef={swiperRef} isLastSlide={isLastSlide} />
                ))}
            </Swiper>
        </SafeAreaView>
    );
};

export default Welcome;
