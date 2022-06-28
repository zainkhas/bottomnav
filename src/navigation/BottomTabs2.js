import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from '../screens/tabs/HomeTab';
import JobsTab from '../screens/tabs/JobsTab';
import CompaniesTab from '../screens/tabs/CompaniesTab';
import SavedTab from '../screens/tabs/SavedTab';
import MyTabBar from '../components/MyTabBar';

const Tab = createBottomTabNavigator();

const BottomTabs2 = () => {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Jobs" component={JobsTab} />
      <Tab.Screen name="Companies" component={CompaniesTab} />
      <Tab.Screen name="Saved" component={SavedTab} />
    </Tab.Navigator>
  );
};

export default BottomTabs2;
