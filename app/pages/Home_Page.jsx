import { View, Text , Button} from 'react-native'


export default function HomePage ({navigation}){
  return (
    <View style={{
      backgroundColor:'white',

    }}>
<Button 
  title='Go to Profile Page'
  onPress={()=>{
    navigation.navigate('Profile',{name:'Suzy'})
  }}
/>
     <Text>Hello Home</Text>
    </View>
  )
}