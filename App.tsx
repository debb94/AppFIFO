/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ScannerApp from './screens/ScannerApp';
import ResultScreen from './screens/ResultScreen';
import Home from './screens/Home';
import ReadMode from './screens/ReadMode';
import FormRead from './screens/FormRead';
import ScannerLote from './screens/ScannerLote';
import ScannerDescription from './screens/ScannerDescription';
import ConfirmScreen from './screens/ConfirmScreen';
import SuccessScreen from './screens/SuccessScreen';

function App(): JSX.Element {

  const Stack = createNativeStackNavigator();
  
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="ReadMode" component={ReadMode} options={{ headerShown: false }}/>
        <Stack.Screen name="FormRead" component={FormRead} options={{headerShown: false}} />
        <Stack.Screen name="ScannerLote" component={ScannerLote} options={{headerShown: false}} />
        <Stack.Screen name="ScannerDescription" component={ScannerDescription} options={{headerShown: false}} />
        <Stack.Screen name="ConfirmScreen" component={ConfirmScreen} options={{headerShown: false}} />
        <Stack.Screen name="Scanner" component={ScannerApp} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
