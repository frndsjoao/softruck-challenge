import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { RoutesProps } from '../@types/navigation';
import HomeScreen from '../screens/Home';
import SignInScreen from '../screens/SignIn';
import RouteDetailScreen from '../screens/routeDetail';
import VehicleRoutesScreen from '../screens/vehicleRoutes';

export type AppNavigatorRoutesProps = NativeStackNavigationProp<RoutesProps>;

const Stack = createNativeStackNavigator<RoutesProps>()

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signIn" screenOptions={{ headerShown: false }}>
        <Stack.Screen name='home' component={HomeScreen} />
        <Stack.Screen name='signIn' component={SignInScreen} />
        <Stack.Screen name='vehicleRoutes' component={VehicleRoutesScreen} />
        <Stack.Screen name='routeDetail' component={RouteDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}