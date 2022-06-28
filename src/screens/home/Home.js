import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from '../../components/Icon';
import BottomTabs from '../../navigation/BottomTabs';
const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;
