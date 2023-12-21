import { useFonts } from 'expo-font';
import React from 'react';
import { Text } from 'react-native';

type CustomTextProps = {
  children: React.ReactNode;
  styleFont:
    | 'MontserratMedium'
    | 'MontserratBold'
    | 'MontserratSemiBold'
    | 'MontserratRegular';
  styles: object;
};

const CustomText: React.FC<CustomTextProps> = ({
  children,
  styleFont,
  styles,
}) => {
  const [loaded] = useFonts({
    MontserratMedium: require('../../../../assets/fonts/Montserrat-Medium.ttf'),
    MontserratBold: require('../../../../assets/fonts/Montserrat-Bold.ttf'),
    MontserratSemiBold: require('../../../../assets/fonts/Montserrat-SemiBold.ttf'),
    MontserratRegular: require('../../../../assets/fonts/Montserrat-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return <Text style={{ ...styles, fontFamily: styleFont }}>{children}</Text>;
};

export default CustomText;
