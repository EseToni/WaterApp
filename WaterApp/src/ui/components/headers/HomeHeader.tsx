import routes from '@common/constants/routes';
import { HeaderStyles } from '@styles/components/HomeHeader';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const HomeHeaderButtonLeft = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{
        ...HeaderStyles.button,
        ...HeaderStyles.buttonTime,
      }}
      onPress={() => {
        // Lógica al presionar el botón
      }}
    >
      <Text style={{ color: 'white' }}>1</Text>
    </TouchableOpacity>
  );
};

export const HomeHeaderButtonRight = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{ ...HeaderStyles.button, ...HeaderStyles.buttonConfig }}
      onPress={() => {
        navigation.navigate(routes['SETUP']);
      }}
    >
      <Text style={{ color: 'red' }}>``</Text>
    </TouchableOpacity>
  );
};
