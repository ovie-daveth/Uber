/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const SignUp = () => {

    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        password: ""
    })
    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="relative w-full h-[250px]">
                    <Image source={images.signUpCar} alt="images" className="z-0 w-full h-[250px]" />
                    <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-4">Create Your account</Text>
                </View>
                <View className="p-5">
                    <InputField
                        secureTextEntry={true}
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
                    <CustomButton title={"Sign Up"} action={function (): void {
                        throw new Error("Function not implemented.");
                    }} bgVariant={""} textVariant={""} IconRight={""} IconLeft={""} />
                    <Text className="text-neutral-700 text-sm italic text-center mt-8">Already have an account? <Link href="/(auth)/signin" className="text-primary-500">Login</Link></Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default SignUp;
