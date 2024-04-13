import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function SignInScreen() {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SignIn</Text>

      <TouchableOpacity onPress={() => navigation.navigate('home')}>
        <Text>Go Home</Text>
      </TouchableOpacity>
    </View>
  )
}