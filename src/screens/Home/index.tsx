import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Logo from './src/assets/logo.svg';

export default function HomeScreen() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Logo width={180} height={45} />
      <Text>Open up App.js to start working on your app!</Text>

      <TouchableOpacity onPress={() => navigation.reset()}>
        <Text>Go back to Sign in</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('routeDetail', { trace: '' })}>
        <Text>Go to route detail</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});