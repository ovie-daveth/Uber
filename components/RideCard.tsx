import { icons } from '@/constants';
import { formatDate, formatTime } from '@/lib/utils';
import React from 'react'
import { Image } from 'react-native';
import { View, Text } from 'react-native'

interface Driver {
  driver_id: string;
  first_name: string;
  last_name: string;
  profile_image_url: string;
  car_image_url: string;
  car_seats: number;
  rating: string;
}

interface Ride {
  ride_id: string;
  origin_address: string;
  destination_address: string;
  origin_latitude: string;
  origin_longitude: string;
  destination_latitude: string;
  destination_longitude: string;
  ride_time: number;
  fare_price: string;
  payment_status: string;
  driver_id: number;
  user_id: string;
  created_at: string;
  driver: Driver;
}

type Prop = {
  data: Ride;
}
const RideCard = ({data}:Prop) => {
  return (
    <View className='flex flex-row items-center justify-center rounded-lg shadow-sm shadow-neutral-300 mb-3 bg-white px-3'>
      <View className='flex flex-col items-start justify-center p-3'>
        <View className='flex flex-row items-center justify-between'>
          <Image source={{uri:`https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${data.destination_longitude},${data.destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}` }} className='w-[80px] h-[90px] rounded-lg'  />
          <View className='flex flex-col mx-5 gap-y-5 flex-1'>
            <View className='flex flex-row items-center gap-x-2'>
              <Image source={icons.to} className='w-5 h-5' />
              <Text className='text-md font-JakartaMedium' numberOfLines={1}>{data?.origin_address}</Text>
            </View>
            <View className='flex flex-row items-center gap-x-2'>
              <Image source={icons.point} className='w-5 h-5' />
              <Text className='text-md font-JakartaMedium' numberOfLines={1}>{data?.destination_address}</Text>
            </View>
          </View>
        </View>
        <View className='flex flex-col w-full mt-5 bg-general-500 rounded-lg p-3 items-start justify-center'>
          <View className='flex flex-row items-center w-full justify-between mb-5'>
            <Text className='text-xs font-JakartaMedium text-gray-500'>Date & Time</Text>
            <Text className='text-xs font-JakartaMedium text-gray-500' numberOfLines={1}>{formatDate(data.created_at)}, {formatTime(data.ride_time)}</Text>
          </View>
          <View className='flex flex-row items-center w-full justify-between mb-5'>
            <Text className='text-xs font-JakartaMedium text-gray-500'>Driver</Text>
            <Text className='text-xs font-JakartaMedium text-gray-500' numberOfLines={1}>{data.driver.first_name}, {data.driver.last_name}</Text>
          </View>
          <View className='flex flex-row items-center w-full justify-between mb-5'>
            <Text className='text-xs font-JakartaMedium text-gray-500'>Car seats</Text>
            <Text className='text-xs font-JakartaMedium text-gray-500' numberOfLines={1}>{data.driver.car_seats}</Text>
          </View>
          <View className='flex flex-row items-center w-full justify-between mb-5'>
            <Text className='text-xs font-JakartaMedium text-gray-500'>Payment Status</Text>
            <Text className={`text-xs font-JakartaMedium text-gray-500 capitalize ${data.payment_status === "paid" ? "text-general-400":"text-red-500"}`} numberOfLines={1}>{data.payment_status}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default RideCard
