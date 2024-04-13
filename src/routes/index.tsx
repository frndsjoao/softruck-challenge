import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { RoutesProps } from '../@types/navigation';
import HomeScreen from '../screens/Home';

export type AppNavigatorRoutesProps = NativeStackNavigationProp<RoutesProps>;

const { Navigator, Screen } = createNativeStackNavigator<RoutesProps>()

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: true }}>
        <Screen name='home' component={HomeScreen} />
        <Screen name='signIn' component={HomeScreen} />
        <Screen name='routeDetail' component={HomeScreen} />
      </Navigator>

    </NavigationContainer>
  )
}