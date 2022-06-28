import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import CustomTab2 from '../screens/customtab2/CustomTab2';
import BottomTabs3 from './BottomTabs3';
import BottomTabs4 from './BottomTabs4';

const Stack = createNativeStackNavigator();
const AppStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CustomTab2" component={CustomTab2} />
      <Stack.Screen name="CustomTab3" component={BottomTabs3} />
      <Stack.Screen name="CustomTab4" component={BottomTabs4} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
