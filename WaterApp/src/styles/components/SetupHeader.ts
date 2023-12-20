import colors from '@styles/colors/colors';
import { StyleSheet, Platform } from 'react-native';

export const HeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#f2f2f2',
  },
  leftButton: {
    backgroundColor: 'blue',
    borderRadius: 25, // Para hacer el botón circular (la mitad del alto del botón)
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10, // Espacio entre botones
  },
  rightButton: {
    backgroundColor: 'green',
    borderRadius: 10, // Para redondear los bordes del botón
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
});
