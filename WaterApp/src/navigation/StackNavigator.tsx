import routes from '@common/constants/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeHeader from '@ui/components/headers/HomeHeader';
import SetupHeader from '@ui/components/headers/SetupHeader';
import HomeScreen from '@ui/screens/HomeScreen';
import SetupScreen from '@ui/screens/SetupScreen';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes['HOME']}
        component={HomeScreen}
        options={HomeHeader}
      />
      <Stack.Screen
        name={routes['SETUP']}
        component={SetupScreen}
        options={SetupHeader}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
