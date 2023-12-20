import colors from '@styles/colors/colors';
import { StyleSheet } from 'react-native';

const infoPercentageStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: colors.greyLight,
  },
});

export default infoPercentageStyles;
