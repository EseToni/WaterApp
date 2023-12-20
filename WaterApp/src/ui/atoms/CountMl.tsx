import countMl from '@styles/atoms/countMl';
import React from 'react';
import { View, Text } from 'react-native';

type CountMlProps = {
  count: number;
};

const CountMl: React.FC<CountMlProps> = ({ count }) => {
  return (
    <View style={countMl.container}>
      <Text style={countMl.text}>{count}ml</Text>
    </View>
  );
};

export default CountMl;
