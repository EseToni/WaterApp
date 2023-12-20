import navBarStyles from '@styles/components/NavBar';
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, SafeAreaView, Dimensions } from 'react-native';

const NavBar = () => {
  const [marginLeftValue, setMarginLeftValue] = useState(0);

  useEffect(() => {
    const width = Dimensions.get('window').width;
    setMarginLeftValue(width / 2 - 30);
  }, []);

  return (
    <SafeAreaView style={navBarStyles.SafeAreaView}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{ ...navBarStyles.container, marginLeft: marginLeftValue }}
        >
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NavBar;
