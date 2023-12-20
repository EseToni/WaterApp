import routes from '@common/constants/routes';
import { HeaderStyles } from '@styles/components/SetupHeader';
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const SetupHeader = ({ navigation }) => {
  return {
    header: () => (
      <View style={HeaderStyles.container}>
        <TouchableOpacity
          style={{
            ...HeaderStyles.leftButton,
          }}
          onPress={() => {
            // Lógica al presionar el botón
          }}
        >
          <Text style={{ color: 'white' }}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...HeaderStyles.rightButton }}
          onPress={() => {
            navigation.navigate(routes['SETUP']);
          }}
        >
          <Text style={{ color: 'red' }}>NOVEDADES</Text>
        </TouchableOpacity>
      </View>
    ),
  };
};

export default SetupHeader;
