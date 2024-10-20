/* eslint-disable prettier/prettier */
import { View, Text, TouchableWithoutFeedback, KeyboardAvoidingView, Image, TextInput, Platform } from 'react-native'
import React from 'react'

type Prop = {
    label: string
    labelStyle?: string
    icon?: string,
    placeholder: string
    value: any
    onChangeText: (e: any) => void;
    containerStyle?: string
    iconStyle?: string
    inputStyle?: string
    secureTextEntry: boolean
}
const InputField = ({ label, labelStyle, placeholder, icon, value, onChangeText, containerStyle, iconStyle, inputStyle, secureTextEntry, ...prop }: Prop) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback>
                <View className='my-2 w-full'>
                    <Text className={`text-[16px] mb-2 ml-2 font-JakartaSemiBold ${labelStyle}`}>{label}</Text>
                    <View className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 ${containerStyle}`}>
                        {
                            icon && <Image source={icon} className={`w-5 h-5 ml-4 ${iconStyle}`} />
                        }
                        <TextInput
                            className={`rounded-full p-2 font-light  text-sm flex-1 text-left  ${inputStyle}`}
                            secureTextEntry={secureTextEntry}
                            placeholder={placeholder}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default InputField