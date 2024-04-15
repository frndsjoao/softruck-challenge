import { RouteProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { RoutesProps } from '../../@types/navigation'

type RouteDetailScreenProp = RouteProp<RoutesProps, 'vehicleRoutes'>
type RouteDetailProps = {
  route: RouteDetailScreenProp
}

export default function VehicleRoutesScreen({ route }: RouteDetailProps) {
  const { plate } = route.params

  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>vehicleRoutes</Text>
      <Text>{plate}</Text>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back to Home</Text>
      </TouchableOpacity>
    </View>
  )
}