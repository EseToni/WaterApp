import infoPercentageStyles from '@styles/atoms/InfoPercentage';
import React from 'react';
import { View, Text } from 'react-native';

type InfoPercentageProps = {
  countPercentage: number;
};

const InfoPercentage: React.FC<InfoPercentageProps> = ({ countPercentage }) => {
  return (
    <View style={infoPercentageStyles.container}>
      <Text style={infoPercentageStyles.text}>
        Hidratación · {countPercentage}% de tu meta
      </Text>
    </View>
  );
};

export default InfoPercentage;
