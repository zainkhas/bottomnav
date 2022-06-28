import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
const HomeTab = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        onPress={() => navigation.goBack()}
        title="Back"
        color="#841584"
      />
      <Text>Home</Text>
      <Button
        onPress={() => navigation.navigate('CustomTab2')}
        title="Custom Tabs 2"
        color="#841584"
      />

      <Button
        onPress={() => navigation.navigate('CustomTab3')}
        title="Custom Tabs 3"
        color="#841584"
      />

      <Button
        onPress={() => navigation.navigate('CustomTab4')}
        title="Custom Tabs 4"
        color="#841584"
      />
    </View>
  );
};

export default HomeTab;
