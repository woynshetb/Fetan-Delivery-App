import { View, Image , Text, SafeAreaView,TextInput,StyleSheet,TouchableOpacity, ScrollView} from 'react-native'
;
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import {  ChevronDownIcon , UserIcon, AdjustmentsVerticalIcon, SearchIcon} from "react-native-heroicons/outline";
import Categories from './component/Categories';
import FeaturedRows from './component/FeaturedRows';
export default function HomePage ({}){
  
  
  const navigation  = useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,

    })
  },[])
  return (
    <SafeAreaView className="bg-white pt-5 ">

<View className ="flex-row pb-3 items-center mx-4 space-x-2">
  <Image source={{
    uri: 'https://reactnative.dev/img/tiny_logo.png',

  }}
className="h-7 w-7 bg-grey-300 p-4 rounded-full" 
  />
<View className="flex-1">
  <Text className ="font-bold text-gray-400 text-xs">Deliver Now!</Text>
  <Text className="font-bold text-xl">Current Location  <ChevronDownIcon size={20} color={'#00ccbb'}/></Text>
</View>
<UserIcon color={'#00CCBB'}/>
</View>
{/* search */}
<View className="flex-row items-center space-x-2 pb-2 mx-4">
  <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 " style={{
    backgroundColor:'#BDC3CB'
  }}>
  <AdjustmentsVerticalIcon color={'gray'}/>
  <TextInput 
  placeholder='Restaurants and cuisines' 
  keyboardType='default' />
  </View>

  <AdjustmentsVerticalIcon color={"#00CCBB"}/>
</View>
 {/* scroll vuew */}

 <ScrollView style={{
  // backgroundColor:"#ececed"
 }}
 contentContainerStyle   ={{
  paddingBottom:10
 }}
 >
  {/* categories */}
  <Categories/>
  
 {/* feature row */}
 <FeaturedRows id="1234" title="Featured " description={"paid placemment from our partner "} />
 <FeaturedRows id="1234" title="Tasty Discount " description={"paid placemment from our partner "} />
 <FeaturedRows id="1234" title="Featured " description={"paid placemment from our partner "} />

 </ScrollView>


    </SafeAreaView>
  )
}