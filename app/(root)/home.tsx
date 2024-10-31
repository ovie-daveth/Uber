/* eslint-disable prettier/prettier */
import { GetProfile } from '@/api/auth'
import { StatusBar } from 'expo-status-bar'
import React, { Component, useEffect } from 'react'
import { Text, View } from 'react-native'

const Home = () => {

    // const getProfile = async () => {
    //     const response = await GetProfile()
    //     if (response) {
    //         console.log("profile", response)
    //     }
    // }

    // useEffect(() => {
    //     getProfile()
    // }, [])
    return (
        <View className='pt-10 bg-slate-100 h-full'>
            <StatusBar style="dark" />
            <Text> textInComponent </Text>
        </View>
    )
}

export default Home
