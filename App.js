import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
import Header  from './components/header';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './components/SplashScreen';
export default function App() {
  
const Stack = createNativeStackNavigator();
  return (
    <>
   {/* <NativeBaseProvider>
     <View>
           <Header/>
           
     </View>
    </NativeBaseProvider> */}

    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
