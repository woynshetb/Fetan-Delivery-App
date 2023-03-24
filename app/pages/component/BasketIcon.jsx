import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasetTotal, selectBasketItems } from '../../../features/basketSlice'
import { useNavigation } from '@react-navigation/native';
import Currency from 'react-currency-formatter';

export default function BasketIcon() {
    const items = useSelector(selectBasketItems) ;
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasetTotal)
  return (
    <View className=" absolute bottom-10 w-full z-50">
    <TouchableOpacity className =" mx-5 p-4 rounded-lg flex-row items-center space-x-1 " style={{
        backgroundColor:"#00ccbb"
    }}>
    <Text className="text-white font-extrabold text-lg py-1 px-2" style={{
        backgroundColor:"#01A296"
    }}>{items.length}</Text>
    <Text className="flex-1 text-white  font-extrabold text-lg text-center">View Basket</Text>
<Text className="text-white  font-extrabold text-lg text-center">    <Currency  quantity={basketTotal} currency ="USD"  /></Text>
    </TouchableOpacity>

    </View>
  )
}