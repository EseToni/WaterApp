import colors from '@styles/colors/colors';
import { StyleSheet } from 'react-native';

const countMl = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    color: colors.blueDark,
    marginLeft: 5,
  },
});

export default countMl;
