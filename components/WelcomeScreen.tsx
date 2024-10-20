/* eslint-disable prettier/prettier */
import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const WelcomeScreen = ({ data, swiperRef, isLastSlide }: any) => {


    return (
        <ScrollView className="flex p-5">
            <View className="flex items-center justify-center py-5">
                <Image
                    source={data?.image}
                    alt={data?.title}
                    resizeMode="contain"
                    className="w-full h-[300px]"
                />
                <View className="flex flex-row items-center justify-center w-full mt-10">
                    <Text className="font-bold text-black text-3xl mx-2 text-center">
                        {data?.title}
                    </Text>
                </View>
                <Text className="text-lg font-Jakarta text-center text-[#858585] font-semibold mx-2 mt-2">
                    {data?.description}
                </Text>
            </View>
            <CustomButton

                action={() => {
                    // eslint-disable-next-line no-unused-expressions
                    isLastSlide ? router.replace("/(auth)/signup") : swiperRef.current?.scrollBy(1)
                }}
                title={isLastSlide ? "Get Started" : "Next"}
                bgVariant="primary"
                textVariant="default"
                IconRight=""
                IconLeft=""
                className="mt-10"
            />
        </ScrollView>
    );
};

export default WelcomeScreen;
