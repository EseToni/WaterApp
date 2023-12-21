import { StyleSheet } from 'react-native';

const imageProgressStyle = StyleSheet.create({
  container: {
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 5,
  },
  maskContainer: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    backgroundColor: 'red',
    overflow: 'hidden',
    zIndex: 20,
  },
  maskImage: {
    flex: 1,
    resizeMode: 'contain',
    backgroundColor: 'blue',
    position: 'absolute',
    ...StyleSheet.absoluteFillObject,
    zIndex: 20,
    width: 350,
    height: 500,
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#0A0A0A',
    marginLeft: 5,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: 350,
    height: 500,
  },
});

export default imageProgressStyle;
