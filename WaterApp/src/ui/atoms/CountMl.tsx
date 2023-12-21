import countMl from '@styles/atoms/countMl';
import CustomText from '@ui/components/custom/CustomText';
import React from 'react';
import { View } from 'react-native';

type CountMlProps = {
  count: number;
};

const CountMl: React.FC<CountMlProps> = ({ count }) => {
  return (
    <View style={countMl.container}>
      <CustomText styleFont="MontserratSemiBold" styles={countMl.text}>
        {count}ml
      </CustomText>
    </View>
  );
};

export default CountMl;
