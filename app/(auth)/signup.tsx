/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import Oauth from "@/components/oauth";
import { supabase } from "@/lib/supabase";


const SignUp = () => {

    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [loading, setLoading] = useState(false)


    const onSignUpPress = async () => {
        setLoading(true)
        const {
            data: { session },
            error,
        } = await supabase.auth.signUp({
            email: formValue.email,
            password: formValue.password,
        })

        if (error) {
            Alert.alert(error.message)
            console.log(error)
            return
        }
        if (!session) Alert.alert('Please check your inbox for email verification!')
        setLoading(false)
        router.replace("/(auth)/signin")
    };

    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="relative w-full h-[220px]">
                    <Image source={images.signUpCar} alt="images" className="z-0 w-full h-[220px]" />
                    <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-4">Create Your account</Text>
                </View>
                <View className="px-5 pb-5">
                    <InputField
                        secureTextEntry={false}
                        label="Name"
                        labelStyle=""
                        placeholder="Enter your name"
                        icon={icons.person}
                        value={formValue.name}
                        onChangeText={(value) => setFormValue({
                            ...formValue,
                            name: value
                        })}
                    />
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
                        secureTextEntry={false}
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
                    <CustomButton loadingState={loading} title={"Sign Up"} action={onSignUpPress} bgVariant={""} textVariant={"secondary"} IconRight={""} IconLeft={""} />
                    <Oauth />
                    <Text className="text-neutral-700 text-sm italic text-center mt-8">Already have an account? <Link href="/(auth)/signin" className="text-primary-500">Login</Link></Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default SignUp;
