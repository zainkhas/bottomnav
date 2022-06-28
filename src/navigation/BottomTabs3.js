import React, {useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from '../screens/tabs/HomeTab';
import JobsTab from '../screens/tabs/JobsTab';
import CompaniesTab from '../screens/tabs/CompaniesTab';
import SavedTab from '../screens/tabs/SavedTab';
import {Animated, Dimensions, View} from 'react-native';
import Icon from '../components/Icon';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({icon, focused}) => {
  return (
    <View
      style={{
        // centring Tab Button...
        position: 'absolute',
        top: 20,
      }}>
      <Icon name={icon} size={20} color={focused ? '#673ab7' : 'gray'}></Icon>
    </View>
  );
};

const BottomTabs2 = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  function getWidth() {
    let width = Dimensions.get('window').width;

    // Horizontal Padding = 20...
    width = width;

    // Total five Tabs...
    return width / 5;
  }

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 40,
            marginHorizontal: 20,
            // Max Height...
            height: 60,
            borderRadius: 10,
            // Shadow...
            shadowColor: '#000',
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            paddingHorizontal: 20,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeTab}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <TabBarIcon icon={'home-blank'} focused={focused} />
            ),
          }}
          listeners={{
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          }}
        />
        <Tab.Screen
          name="Jobs"
          component={JobsTab}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <TabBarIcon icon={'briefcase-blank'} focused={focused} />
            ),
          }}
          listeners={{
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true,
              }).start();
            },
          }}
        />
        <Tab.Screen
          name="Companies"
          component={CompaniesTab}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <TabBarIcon icon={'industry'} focused={focused} />
            ),
          }}
          listeners={{
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 2,
                useNativeDriver: true,
              }).start();
            },
          }}
        />
        <Tab.Screen
          name="Saved"
          component={SavedTab}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <TabBarIcon icon={'heart'} focused={focused} />
            ),
          }}
          listeners={{
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true,
              }).start();
            },
          }}
        />
      </Tab.Navigator>
      <Animated.View
        style={{
          width: getWidth() - 20,
          height: 3,
          backgroundColor: '#673ab7',
          position: 'absolute',
          bottom: 40,
          // Horizontal Padding = 20...
          left: 50,
          borderRadius: 20,
          transform: [{translateX: tabOffsetValue}],
        }}></Animated.View>
    </>
  );
};

export default BottomTabs2;
