import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '@/constants'
import InputField from './InputField'

const GoogleSearchInput = () => {

    const [hideIcon, setHideICon] = useState(false)
    const [destination, setDestination] = useState("")
    const HandleSearchDestination = () => {
        // Navigate to search destination screen
        setHideICon(false)
    }

  return (
    <View className='mt-5 flex justify-end  items-end  float-end'>
      <View className={`mr-3  ${hideIcon ? "w-[80%]":"rounded-full p-3 bg-white"}`}>
            <TouchableOpacity onPress={() => setHideICon(true)} className={`${hideIcon ? "hidden":"flex"}`}>
            <Image source={icons.search} resizeMode='contain' className='w-5 h-5' />
            </TouchableOpacity>
            <View className={`${hideIcon ? "flex":"hidden"}`}>
              <InputField containerStyle='bg-white px-3 -mt-11' placeholder={'Where do you want to go?'} value={destination} onChangeText={HandleSearchDestination} secureTextEntry={false} />
            </View>
      </View>
      <View>

      </View>
    </View>
  )
}

export default GoogleSearchInput