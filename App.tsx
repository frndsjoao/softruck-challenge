import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Logo from './src/assets/logo.svg';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo width={180} height={45} />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar translucent barStyle='dark-content' backgroundColor="transparent" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
