import infoPercentageStyles from '@styles/atoms/InfoPercentage';
import CustomText from '@ui/components/custom/CustomText';
import React from 'react';
import { View } from 'react-native';

type InfoPercentageProps = {
  countPercentage: number;
};

const InfoPercentage: React.FC<InfoPercentageProps> = ({ countPercentage }) => {
  return (
    <View style={infoPercentageStyles.container}>
      <CustomText styleFont="NunitoSemiBold" styles={infoPercentageStyles.text}>
        Hidratación · {countPercentage}% de tu meta
      </CustomText>
    </View>
  );
};

export default InfoPercentage;
