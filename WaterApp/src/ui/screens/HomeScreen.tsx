import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';

type HomeScreenProps = {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase, 'HOME'>;
  options: StackNavigationOptions;
  back: any;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
  return (
    <View>
      <Text>Home Screeeeen</Text>
    </View>
  );
};

export default HomeScreen;
