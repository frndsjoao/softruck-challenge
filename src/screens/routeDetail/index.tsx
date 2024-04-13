import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function RouteDetailScreen() {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>routeDetail</Text>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back to Home</Text>
      </TouchableOpacity>
    </View>
  )
}