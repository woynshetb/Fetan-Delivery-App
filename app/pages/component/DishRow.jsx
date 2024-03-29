import { View, Text, TouchableOpacity ,Image} from 'react-native'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline';
import { useSelector , useDispatch } from 'react-redux';
import { addToBasket ,removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../../../features/basketSlice';
export default function DishRow({
    key,
    id,
    name,
    description,
    price,
    image

}) {

    const dispatch = useDispatch();
    const items = useSelector((state)=>selectBasketItemsWithId(state,id))
  
   
  

    const addItemTobasket =()=>{
        dispatch(addToBasket({id, name , description , price , image}))

    }

    const removeItemFromBasket=()=>{
        dispatch(removeFromBasket({id}))
    }

  const [isPressed , setIsPressed] = useState(false);

  return (
    <>
    <TouchableOpacity onPress={()=>{
        setIsPressed(!isPressed)
    }} className=" bg-white border p-4 border-gray-200">
      <View className="flex-row">
      <View className="flex-1 pr-2">
        <Text className="text-lg mb-1">{name}</Text>
        <Text className="text-gray-400">{description}  </Text>
        <Text className=" text-gray-400 mt-2">
        <Currency quantity={price} currency="USD"/>
        </Text>
        
       
      </View>
      <View>
        <Image 
        style={{
            borderWidth:1,
            borderColor:"#f3f3f4"
        }}
        source={{
             uri:image
        }}
            className="h-20 w-20 bg-gray-300 p-4"
        />
      </View>
      </View>
    </TouchableOpacity>
    {isPressed &&(
        <View className=" bg-white px-4">
            <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
                <MinusCircleIcon

                    color={  !items.length > 0 ?"gray" :  "#00BBCC"}
                    size={40}
                />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity  onPress={addItemTobasket} >
                <PlusCircleIcon

        color="#00BBCC"
                    size={40}
                />
            </TouchableOpacity>
            </View>
        </View>
    )}
    </>
  )
}
