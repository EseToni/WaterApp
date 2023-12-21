import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
const CircleLevel = () => {
  const radiusOuter = 60;
  const radiusInner = 50;
  const centerX = 100;
  const centerY = 100;
  const startAngle = -Math.PI / 2;
  const endAngle = 0;
  const outerArc = [
    `M ${centerX + radiusOuter * Math.cos(startAngle)} ${
      centerY + radiusOuter * Math.sin(startAngle)
    }`,
    `A ${radiusOuter} ${radiusOuter} 0 0 1 ${
      centerX + radiusOuter * Math.cos(endAngle)
    } ${centerY + radiusOuter * Math.sin(endAngle)}`,
    `L ${centerX} ${centerY}`,
    'Z',
  ].join(' ');

  return (
    <View>
      <Svg height="200" width="200">
        <Path d={outerArc} fill="#004080" />

        <Circle cx={centerX} cy={centerY} r={radiusInner} fill="#0077b6" />

        <Text
          style={{
            position: 'absolute',
            top: centerY - 12,
            left: centerX - 6,
            fontSize: 24,
            color: 'white',
          }}
        >
          1
        </Text>
      </Svg>
    </View>
  );
};

export default CircleLevel;
