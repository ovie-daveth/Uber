/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import Oauth from "@/components/oauth";
import { LoginUsers } from "@/api/auth";
import { storeToken } from "@/lib/utils";
import { LoginResponse } from "@/interface/LoginResponse";
import Modal from "react-native-modal"


const SignIn = () => {

    const [formValue, setFormValue] = useState({
        email: "",
        password: ""
    })

    const [loading, setLoading] = useState(false)
    const [isVerfied, setIsVerified] = useState(false)

    const onSignInPress = async () => {
        setLoading(true)
        try {
            // setTimeout(() => {
            //     setIsVerified(true)
            // }, 2000);
            // setLoading(false)
            const response = await LoginUsers(formValue);
            if (response) {
                console.log("loggedIn", response.data)
                const result = response.data as LoginResponse;
                storeToken(result.jwt);
                setIsVerified(true)
            }
        } catch (error: any) {
            console.log("error", error?.message)
            setLoading(false)
        }
    }

    const GoHome = () => {
        router.replace("/(root)/home")
    }

    return (
        <ScrollView className="flex-1 bg-white h-full">
            <View className="flex-1 bg-white">
                <View className="relative w-full h-[220px]">
                    <Image source={images.signUpCar} alt="images" className="z-0 w-full h-[220px]" />
                    <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-4">Welcome &#x1F44B;
                    </Text>
                </View>
                <View className="px-5 pb-5">
                    <InputField
                        secureTextEntry={false}
                        label="Email"
                        labelStyle=""
                        placeholder="Enter your email"
                        icon={icons.person}
                        value={formValue.email}
                        onChangeText={(value) => setFormValue({
                            ...formValue,
                            email: value
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
                            password: value
                        })}
                    />
                </View>
                <View className="px-6">
                    <CustomButton loadingState={loading} title={"Sign In"} action={onSignInPress} bgVariant={""} textVariant={"secondary"} IconRight={""} IconLeft={""} />
                    <Oauth />
                    <Text className="text-neutral-700 text-sm italic text-center mt-8">Don't have an account? <Link href="/(auth)/signup" className="text-primary-500">Sign Up</Link></Text>
                </View>
            </View>
            <Modal animationIn={"bounceIn"} animationOut={"bounce"} swipeDirection={"left"} statusBarTranslucent={true} className="h-full min-h-full" isVisible={isVerfied}>
                <View className="bg-white flex flex-col justify-center items-center py-5 rounded-lg gap-y-5">
                    <Image source={images.check} className="w-24 h-24" resizeMode="contain" />
                    <Text className="text-sm text-center font-medium">Hurray, you are all set, enjoy quality ride</Text>
                    <CustomButton className="w-[85%]" title={"Book Now"} action={() => router.replace("/(root)/home")} bgVariant={"primary"} textVariant={"secondary"} IconRight={""} IconLeft={""} />
                </View>
            </Modal>
        </ScrollView>
    );
};

export default SignIn;
