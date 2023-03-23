import { useColorScheme } from 'react-native';
import { useEffect } from 'react';
// navigation related 
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// custom Components 
import HomePage from './app/pages/Home_Page';
import ProfilePage from './app/pages/Profile_Page';
import OnbardingPage from './app/pages/Onbarding_page';

// styles related 
import { TailwindProvider } from 'tailwindcss-react-native';


const Stack = createNativeStackNavigator();

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  // const colors = {
  //   text: colorScheme === 'dark' ? 'text-white' : 'dark:text-black',
  // };
  
  return (
    <TailwindProvider>
   <NavigationContainer>
     <Stack.Navigator>
     {/* <Stack.Screen
       name='Onboarding'
      component={OnbardingPage}
     /> */}
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
   </TailwindProvider>
  );
}


