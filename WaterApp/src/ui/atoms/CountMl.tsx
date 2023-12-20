import React from 'react';
import { View, Text } from 'react-native';

type CountMlProps = {
  count: number;
};

const CountMl: React.FC<CountMlProps> = ({ count }) => {
  return (
    <View>
      <Text>{count} ml</Text>
    </View>
  );
};

export default CountMl;
