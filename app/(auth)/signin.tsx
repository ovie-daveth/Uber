/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import Oauth from "@/components/oauth";

const SignIn = () => {

    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onSignInPress = () => {

    }
    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="relative w-full h-[220px]">
                    <Image source={images.signUpCar} alt="images" className="z-0 w-full h-[220px]" />
                    <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-4">Welcome &#x1F44B;
                    </Text>
                </View>
                <View className="px-5 pb-5">
                    <InputField
                        secureTextEntry={true}
                        label="Email"
                        labelStyle=""
                        placeholder="Enter your email"
                        icon={icons.person}
                        value={formValue.email}
                        onChangeText={(value) => setFormValue({
                            ...formValue,
                            name: value
                        })}
                    />
                    <InputField
                        secureTextEntry={true}
                        label="Password"
                        labelStyle=""
                        placeholder="Create a password"
                        icon={icons.person}
                        value={formValue.password}
                        onChangeText={(value) => setFormValue({
                            ...formValue,
                            name: value
                        })}
                    />
                </View>
                <View className="px-6">
                    <CustomButton title={"Sign In"} action={onSignInPress} bgVariant={""} textVariant={"secondary"} IconRight={""} IconLeft={""} />
                    <Oauth />
                    <Text className="text-neutral-700 text-sm italic text-center mt-8">Don't have an account? <Link href="/(auth)/signup" className="text-primary-500">Sign Up</Link></Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default SignIn;
