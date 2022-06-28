import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStackNavigator from './src/navigation/AppStackNavigator';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/pro-solid-svg-icons';
import {fal} from '@fortawesome/pro-light-svg-icons';
import {far} from '@fortawesome/pro-regular-svg-icons';
import {SafeAreaProvider} from 'react-native-safe-area-context';

library.add(fas, fal, far);
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
