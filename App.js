import { Button, Text , View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './app/pages/Home_Page';
import ProfilePage from './app/pages/Profile_Page';

const Stack = createNativeStackNavigator();




export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomePage}
        option ={{title:'Welcome'}}
      />
      <Stack.Screen
       name="Profile"
        component={ProfilePage}

      />
     </Stack.Navigator>
   </NavigationContainer>
  );
}


