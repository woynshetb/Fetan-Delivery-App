import { View, Text, TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import Currency from 'react-currency-formatter';

export default function DishRow({
    key,
    id,
    name,
    description,
    price,
    image

}) {
  return (
    <TouchableOpacity>
      <View>
        <Text className="text-lg mb-1">{name}</Text>
        <Text className="text-gray-400">{description}  </Text>
        <Text className=" text-gray-400 mt-2">
        <Currency quantity={price} currency="USD"/>
        </Text>
        
       
      </View>
      <View>
        <Image source={{
             uri:image
        }}
            className="h-20 w-20 bg-gray-300 p-4"
        />
      </View>
    </TouchableOpacity>
  )
}
