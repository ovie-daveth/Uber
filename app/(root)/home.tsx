/* eslint-disable prettier/prettier */
import { GetProfile } from '@/api/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { Component, useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

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

    const Logout = async () => {
        await AsyncStorage.removeItem("token")
        router.push("/(auth)/welcome")
    }
    return (
        <View className='pt-10 bg-slate-100 h-full'>
            <StatusBar style="dark" />
            <Text> textInComponent </Text>
            <TouchableOpacity onPress={Logout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home
