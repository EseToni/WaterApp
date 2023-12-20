import routes from '@common/constants/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@ui/screens/HomeScreen';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={routes['HOME']} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
