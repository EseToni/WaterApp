import { StyleSheet } from 'react-native';

const navBarStyles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  containerParent: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default navBarStyles;
