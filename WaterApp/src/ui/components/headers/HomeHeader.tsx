import routes from '@common/constants/routes';
import { HeaderStyles } from '@styles/components/HomeHeader';
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const HomeHeader = ({ navigation }) => {
  return {
    header: () => (
      <View style={HeaderStyles.container}>
        <TouchableOpacity
          style={{
            ...HeaderStyles.button,
            ...HeaderStyles.buttonTime,
          }}
          onPress={() => {
            // Lógica al presionar el botón
          }}
        >
          <Text style={{ color: 'white' }}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...HeaderStyles.button, ...HeaderStyles.buttonConfig }}
          onPress={() => {
            navigation.navigate(routes['SETUP']);
          }}
        >
          <Text style={{ color: 'red' }}>``</Text>
        </TouchableOpacity>
      </View>
    ),
  };
};

export default HomeHeader;