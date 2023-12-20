import { StyleSheet } from 'react-native';

const homeScreen = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    padding: 10,
  },
  containerInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#0A0A0A',
    marginLeft: 5,
  },
});

export default homeScreen;
