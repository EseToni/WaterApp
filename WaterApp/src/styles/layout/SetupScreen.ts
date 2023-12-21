import colors from '@styles/colors/colors';
import { StyleSheet } from 'react-native';

export const ScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  card: {
    backgroundColor: colors.greyLight,
    padding: 15,
    marginBottom: 10,
    borderRadius: 20,
  },
  switchCard: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  customCard: {
    backgroundColor: colors.bluePrimary,
    padding: 20,
    marginTop: 5,
    marginBottom: 50,
    borderRadius: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
  },
  titleCard: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'left',
  },
  customTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
  },
  content: {
    color: 'grey',
    textAlign: 'left',
  },
  subtitle: {
    color: 'grey',
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'left',
  },
  customSubtitle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'left',
  },
  text: {
    color: colors.blueLight,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'left',
  },
  header: {
    marginBottom: 10,
  },
  switchContainer: {
    position: 'absolute',
    top: 0,
    right: 10,
  },
});
