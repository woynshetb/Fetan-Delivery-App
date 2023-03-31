import { View, Text } from 'react-native'
import React, { useLayoutEffect, useState,useMemo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectResturant } from '../../features/restaurantSlice'
import { selectBasketItems } from '../../features/basketSlice'

export default function BasketPage() {
    const navigation = useNavigation()
    const reataurnat = useSelector(selectResturant)
    const items = useSelector(selectBasketItems)
    const [groupedItemsInBasket , setGroupedItemsInBaset]= useState([]);
    const dispatch = useDispatch()
    // otimization
    useMemo(()=>{
   
    },[items])
    useLayoutEffect(()=>{
        navigation.setOptions({
          headerShown:false,
    
        })
      },[])
  return (
    <View>
      <Text>BasketPage</Text>
    </View>
  )
}