import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { RoutesProps } from '../@types/navigation';
import HomeScreen from '../screens/Home';
import RouteDetailScreen from '../screens/RouteDetail';
import SignInScreen from '../screens/SignIn';
import VehicleRoutesScreen from '../screens/VehicleRoutes';

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