import routes from '@common/constants/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HomeHeaderButtonLeft,
  HomeHeaderButtonRight,
} from '@ui/components/headers/HomeHeader';
import {
  SetupHeaderButtonLeft,
  SetupHeaderButtonRight,
} from '@ui/components/headers/SetupHeader';
import HomeScreen from '@ui/screens/HomeScreen';
import SetupScreen from '@ui/screens/SetupScreen';
import { Platform, View } from 'react-native';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const themeStatusBar = Platform.OS === 'android' ? 'dark' : null;
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
        },
        contentStyle: {
          backgroundColor: 'transparent',
          flex: 1,
        },
        headerShadowVisible: false,
        headerTitle: '',
        statusBarStyle: themeStatusBar,
        animation: 'simple_push',
      }}
    >
      <Stack.Screen
        name={routes['HOME']}
        component={HomeScreen}
        options={({ navigation }) => ({
          headerLeft: () => <HomeHeaderButtonLeft navigation={navigation} />,
          headerRight: () => <HomeHeaderButtonRight navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name={routes['SETUP']}
        component={SetupScreen}
        options={({ navigation }) => ({
          headerLeft: () => <SetupHeaderButtonLeft navigation={navigation} />,
          headerRight: () => <SetupHeaderButtonRight navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
