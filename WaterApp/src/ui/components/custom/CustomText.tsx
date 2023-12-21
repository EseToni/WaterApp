import { useFonts } from 'expo-font';
import React from 'react';
import { Text } from 'react-native';

type CustomTextProps = {
  children: React.ReactNode;
  styleFont: 'NunitoBold' | 'NunitoRegular' | 'NunitoMedium' | 'NunitoSemiBold';
  styles: object;
};

const CustomText: React.FC<CustomTextProps> = ({
  children,
  styleFont,
  styles,
}) => {
  const [loaded] = useFonts({
    NunitoBold: require('../../../../assets/fonts/Nunito-Bold.ttf'),
    NunitoRegular: require('../../../../assets/fonts/Nunito-Regular.ttf'),
    NunitoMedium: require('../../../../assets/fonts/Nunito-Medium.ttf'),
    NunitoSemiBold: require('../../../../assets/fonts/Nunito-SemiBold.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return <Text style={{ ...styles, fontFamily: styleFont }}>{children}</Text>;
};

export default CustomText;
