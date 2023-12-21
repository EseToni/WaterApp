import imageProgressStyle from '@styles/components/imageProgress';
import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated, Easing } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';

const ImageProgress = () => {
  const image = require('../../../assets/images/zorro.png');
  const waveAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(waveAnimation, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [waveAnimation]);

  const waveInterpolation = waveAnimation.interpolate({
    inputRange: [0, 1],
    extrapolateLeft: 'extend',
    outputRange: ['0deg', '50deg'],
  });

  return (
    <MaskedView
      style={{ flex: 2, flexDirection: 'row', height: '100%' }}
      maskElement={
        <View
          style={{
            // Transparent background because mask is based off alpha channel.
            backgroundColor: 'transparent',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image style={styles.image} source={image} />
        </View>
      }
    >
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'grey',
          flexDirection: 'column-reverse',
        }}
      >
        <Animated.View
          style={[
            {
              width: '100%',
              height: 100,
              backgroundColor: 'green',
              transform: [{ rotateX: waveInterpolation }],
            },
          ]}
        />
        <Animated.View
          style={[
            {
              width: '100%',
              height: 100,
              backgroundColor: 'green',
              transform: [{ rotateX: waveInterpolation }],
            },
          ]}
        />
      </View>
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
  },
  maskedView: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
  },
  maskWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mask: {
    width: 200,
    height: 200,
    backgroundColor: '#000',
    borderRadius: 100,
  },
  image: {
    flex: 1,
    height: 600,
    width: 500,
    resizeMode: 'contain',
  },
});

export default ImageProgress;
