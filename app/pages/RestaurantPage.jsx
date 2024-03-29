import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useRoute,useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';
import { ArrowLeftIcon, ChevronRightIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline';

import DishRow from './component/DishRow';
import BasketIcon from './component/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../../features/restaurantSlice';
export default function RestaurantPage({}) {
    
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const {params:{
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat
    }} = useRoute();
    useLayoutEffect(()=>{
    
   navigation.setOptions({
    headerShown:false
   })
    })

    useEffect(()=>{
        dispatch(setRestaurant({
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat
        }))
    },[dispatch])
    
  return (
  <>
  <BasketIcon/>
     <ScrollView>
    <View>
        <Image
            source={{
                uri:imgUrl
            }}
            className ="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity onPress={()=>{
        navigation.goBack()
    }} className="absolute top-14 left-5 bg-gray-100 rounded-full ">
        <ArrowLeftIcon size={20} color="#00ccbb"/>
    </TouchableOpacity>
    </View>
    <View className="bg-white">
        <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">
                {title}
            </Text>
            <View className="flex-row items-center space-x-1">
      <StarIcon color={"green"} opacity={0.5} size={22}/>
      <Text className="text-xs text-gray-500">
      <Text className="text-green-500">{rating}</Text> .{genre}
      <StarIcon color={"grey"} opacity={0.5} size={22}/>
      <Text className="text-xs text-gray-500">Nearby . {address}</Text>
 

     </Text>

     </View>
     <Text className="text-gray-500 text-sm pb-4">{short_description}</Text>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon  color={"grey"} opacity={0.5} size={22}/>
            <Text className="pl-2 flex-1 text-md font-bold"> Have a food allergy? </Text>
            <ChevronRightIcon color={"#00bbcc"} opacity={0.5} size={22}/>
        </TouchableOpacity>
    </View>
    <View className="pb-36">
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
        {dishes.map((dish)=>(<DishRow 
   key={dish.key}
   id={dish.id}
   name={dish.name}
   description={dish.description}
   price={dish.price}
   image={dish.image}
        />))}
    </View>
   </ScrollView>
  </>
  )
}