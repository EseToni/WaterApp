import { useFonts } from 'expo-font';
import React from 'react';
import { Text } from 'react-native';

type CustomTextProps = {
  children: React.ReactNode;
  styleFont: 'CoreSansBold';
  styles: object;
};

const CustomText: React.FC<CustomTextProps> = ({
  children,
  styleFont,
  styles,
}) => {
  const [loaded] = useFonts({
    CoreSansBold: require('../../../../assets/fonts/CoreSansBold.otf'),
  });
  if (!loaded) {
    return null;
  }
  return <Text style={{ ...styles, fontFamily: styleFont }}>{children}</Text>;
};

export default CustomText;
