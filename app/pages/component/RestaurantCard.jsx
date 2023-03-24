import { View, Text , Image} from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/outline'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export default function RestaurantCard({
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

}) {
    const navigation = useNavigation();
  return (
    <TouchableOpacity className=" bg-white mr-3 shadow
    
    "
    onPress={()=>{
        navigation.navigate("Restaurant",{
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

})
    }}
    
    >
     <Image
      source={{
        uri:imgUrl
     }}
     className ="h-36 w-64"


     />
     <View className="px-3 pb-4">
     <Text className="font-bold text-lg pt-2">{title}</Text>
     <View className="flex-row items-center space-x-1">
     <StarIcon color={"green"} opacity={0.5} size={22}/>
     <Text className="text-xs text-gray-500">
     <Text className="text-green-500">{rating}</Text> .{genre}

     </Text>

     </View>
     <View>
        <StarIcon color={"grey"} opacity={0.5} size={22}/>
        <Text className="text-xs text-gray-500">Nearby . {address}</Text>
     </View>
     </View>
    </TouchableOpacity>
  )
}