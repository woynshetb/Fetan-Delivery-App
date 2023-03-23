import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'



export default function Categories() {
  return (
    <ScrollView
    contentContainerStyle={{
       paddingHorizontal:15,
       paddingTop:10, 
    }}
     horizontal
     showsVerticalScrollIndicator={false}
    >
    <CategoryCard imgUrl ='https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title ="Testing" />
    <CategoryCard imgUrl ='https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title ="Testing" />
    <CategoryCard imgUrl ='https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title ="Testing" />
    <CategoryCard imgUrl ='https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title ="Testing" />
    <CategoryCard imgUrl ='https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title ="Testing" />
    <CategoryCard imgUrl ='https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title ="Testing" />
    <CategoryCard imgUrl ='https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title ="Testing" />
    <CategoryCard imgUrl ='https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title ="Testing" />
    
    
    </ScrollView>
  )
}

