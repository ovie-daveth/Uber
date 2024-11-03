/* eslint-disable prettier/prettier */
import { Redirect } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image } from 'react-native'
import { Text, View } from 'react-native'
import Modal from 'react-native-modal'

const Home = () => {

    const [isLoading, setIsLoading] = useState(true)
   
  useEffect(() => {
    setTimeout(() => {
        setIsLoading(false)
    }, 2000);
  }, [])

    const Redirecting = () => {
        return <Redirect href="/(root)/(tabs)/home" />
    }

    if(!isLoading) return Redirecting()

    return (
        <View className='pt-10 bg-slate-100 h-full'>
            <StatusBar style="dark" />
            <Modal animationIn={"bounceIn"} animationOut={"bounce"} swipeDirection={"left"} statusBarTranslucent={true} className="h-full min-h-full" isVisible={true}>
                <View className="bg-white flex flex-col justify-center items-center py-5 rounded-lg gap-y-5">
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text className="text-sm text-center font-medium">Loading your data, it will take just a minute</Text>
                    
                </View>
            </Modal>
        </View>
    )
}

export default Home
