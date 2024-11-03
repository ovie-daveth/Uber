/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import Oauth from "@/components/oauth";
import { RegisterUser } from "@/api/auth";
import { LoginResponse } from "@/interface/LoginResponse";
import ReactNativeModal from "react-native-modal";
import { storeToken } from "@/lib/utils";


const SignUp = () => {

    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [code, setCode] = useState("")

    const [loading, setLoading] = useState(false)
    const [isVerfied, setIsVerified] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);


    const onSignUpPress = async () => {
        try {
            
            const response = await RegisterUser(formValue);
            if (response) {
                console.log("loggedIn", response.data)
                const result = response.data as LoginResponse;
                storeToken(result.jwt);
                setModalVisible(true)
            }
        } catch (error: any) {
            console.log("error", error?.message)
            setLoading(false)
        }
    };


    const VerifyCode = () => {

        setLoading(true)
        setTimeout(() => {
            setModalVisible(false)
            setIsVerified(true)
            
        }, 1000);
        setLoading(false)
    }

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
            <ReactNativeModal animationIn={"bounceIn"} animationOut={"bounce"} swipeDirection={"left"} statusBarTranslucent={true} className="h-full min-h-full" isVisible={modalVisible}>
                <View className="bg-white flex flex-col pb-5 pt-0 px-5 rounded-lg gap-y-5">
                    <View className="">
                        <Text className="text-xl font-bold">Verification</Text>
                        <Text className="text-sm font-normal">We've sent a code your email</Text>
                    </View>
                    <InputField
                    label="Code"
                        secureTextEntry={false}
                        labelStyle=""
                        placeholder="123456"
                        icon={icons.lock}
                        value={code}
                        onChangeText={(value) => setCode(value)}
                    />
                    <CustomButton className="w-[100%]" title={"Verify Code"} action={VerifyCode} bgVariant={"primary"} textVariant={"secondary"} IconRight={""} IconLeft={""} />
                </View>
            </ReactNativeModal>
            <ReactNativeModal animationIn={"bounceIn"} animationOut={"bounce"} swipeDirection={"left"} statusBarTranslucent={true} className="h-full min-h-full" isVisible={isVerfied}>
                <View className="bg-white flex flex-col justify-center items-center py-5 rounded-lg gap-y-5">
              
                    <Image source={images.check} className="w-24 h-24" resizeMode="contain" />
                    <Text className="text-sm text-center font-medium">Your email has been verified</Text>
                    <CustomButton className="w-[80%]" title={"Login"} action={() => router.replace("/(root)/home")} bgVariant={"primary"} textVariant={"secondary"} IconRight={""} IconLeft={""} />
                </View>
             
            </ReactNativeModal>
        </ScrollView>
    );
};

export default SignUp;
