import colors from '@styles/colors/colors';
import { StyleSheet, Platform } from 'react-native';

export const HeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    height: Platform.OS === 'ios' ? 90 : 60,
    padding: 5,
  },
  button: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  buttonTime: {
    backgroundColor: colors.bluePrimary,
    marginLeft: 12,
  },
  buttonConfig: {
    backgroundColor: colors.grey,
    marginRight: 12,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
