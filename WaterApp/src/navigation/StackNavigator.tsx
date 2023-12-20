import routes from '@common/constants/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeHeader from '@ui/components/headers/HomeHeader';
import HomeScreen from '@ui/screens/HomeScreen';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes['HOME']}
        component={HomeScreen}
        options={HomeHeader}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
