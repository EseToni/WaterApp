import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import homeScreen from '@styles/layout/homeScreen';
import CountMl from '@ui/atoms/CountMl';
import InfoPercentage from '@ui/atoms/InfoPercentage';
import NavBar from '@ui/components/NavBar';
import ImageProgress from '@ui/components/imageProgress';
import React from 'react';
import { View, Text } from 'react-native';
import CustomText from '@ui/components/custom/CustomText';

type HomeScreenProps = {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase, 'HOME'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
  return (
    <View style={homeScreen.container}>
      <View style={homeScreen.containerInfo}>
        <CountMl count={200} />
        <InfoPercentage countPercentage={23} />
      </View>
      <CustomText />
      <NavBar />
    </View>
  );
};

export default HomeScreen;
