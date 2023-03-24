import { View, Text } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native-gesture-handler'
import RestaurantCard from './RestaurantCard'

export default function FeaturedRows({id, title , description}) {
  return (
   <View>
     <View  className="mt-4 flex-row items-center justify-between px-4">
      <Text className = "font-bold text-lg" >{title}</Text>
      <ArrowRightIcon color={"#00CCBB"}/>
    </View>
    <Text className="text-xs text-gray-500 px-4">{description}</Text>
    <ScrollView 
    horizontal
    contentContainerStyle={{
      paddingHorizontal:15,
    }}
    showsHorizontalScrollIndicator={false}
    className="pt-4"
    >
     {/* Restaurant Cards */}
     <RestaurantCard
      id={"123"}
       imgUrl="https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       title={"Yo SHushio"}
       rating={4.5}
       genre="Japanese"
       address={"Addis Ababa Bole Ruwanda"}
       short_description="This is a Test description"
       dishes={[
        {  key:1,
          id:1,
          name:"HEllo Baby",
          description:"Food is always good",
          price:500,
          image:"https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          

        },
        {  key:2,
          id:2,
          name:"HEllo Baby",
          description:"Food is always good",
          price:500,
          image:"https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

        },
        {  key:3,
          id:3,
          name:"HEllo Baby",
          description:"Food is always good",
          price:500,
          image:"https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

        },

       ]}
       long={5}
       lat={20}

      />
       <RestaurantCard
      id={"123"}
       imgUrl="https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       title={"Yo SHushio"}
       rating={4.5}
       genre="Japanese"
       address={"Addis Ababa Bole Ruwanda"}
       short_description="This is a Test description"
       dishes={[]}
       long={5}
       lat={20}

      />
       <RestaurantCard
      id={"123"}
       imgUrl="https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       title={"Yo SHushio"}
       rating={4.5}
       genre="Japanese"
       address={"Addis Ababa Bole Ruwanda"}
       short_description="This is a Test description"
       dishes={[]}
       long={5}
       lat={20}

      />
       <RestaurantCard
      id={"123"}
       imgUrl="https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       title={"Yo SHushio"}
       rating={4.5}
       genre="Japanese"
       address={"Addis Ababa Bole Ruwanda"}
       short_description="This is a Test description"
       dishes={[]}
       long={5}
       lat={20}

      />
       <RestaurantCard
      id={"123"}
       imgUrl="https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       title={"Yo SHushio"}
       rating={4.5}
       genre="Japanese"
       address={"Addis Ababa Bole Ruwanda"}
       short_description="This is a Test description"
       dishes={[]}
       long={5}
       lat={20}

      />
    </ScrollView>
   </View>
  )
}