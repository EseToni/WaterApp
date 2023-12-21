import routes from '@common/constants/routes';
import { HeaderStyles } from '@styles/components/SetupHeader';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import CustomText from '../custom/CustomText';

export const SetupHeaderButtonLeft = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{ ...HeaderStyles.leftButton }}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Text style={{ color: 'white' }}>{'<'}</Text>
    </TouchableOpacity>
  );
};

export const SetupHeaderButtonRight = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{ ...HeaderStyles.rightButton }}
      onPress={() => {
        navigation.navigate(routes['SETUP']);
      }}
    >
      <CustomText styleFont="NunitoBold" styles={{ ...HeaderStyles.text }}>
        NOVEDADES
      </CustomText>
    </TouchableOpacity>
  );
};
