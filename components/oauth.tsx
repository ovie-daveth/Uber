/* eslint-disable prettier/prettier */
import { View, Text, Image, Alert } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'
import { icons } from '@/constants'

const Oauth = () => {

    const handleGoogleSignIn = async () => {

    }



    return (
        <View>
            <View className='flex flex-row justify-center items-center mt-4 gap-x-3'>
                <View className='flex-1 h-[1px] bg-general-100' />
                <Text className='text-lg'>Or</Text>
                <View className='flex-1 h-[1px] bg-general-100' />
            </View>
            <CustomButton title={'Login with Google'} action={handleGoogleSignIn} className='mt-5 w-full shadow-none' bgVariant="outline" textVariant={'primary'} IconRight={''} IconLeft={() => (
                <Image source={icons.google} resizeMode='contain' className='w-5 h-5 mx-2' />
            )} />
        </View>
    )
}

export default Oauth