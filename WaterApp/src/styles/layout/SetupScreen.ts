import colors from '@styles/colors/colors';
import { StyleSheet } from 'react-native';

export const ScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
  },
  customTitle: {
    color: 'white',
    fontSize: 18,
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
    marginBottom: 8,
    textAlign: 'left',
  },
  text: {
    color: 'grey',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'left',
  },
  header: {
    marginBottom: 10,
  },
  switchContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
