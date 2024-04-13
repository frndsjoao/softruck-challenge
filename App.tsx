import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { useState } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import Routes from './src/routes';
import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useState({ Roboto_400Regular, Roboto_700Bold })

  return (
    <>
      <StatusBar translucent barStyle='dark-content' backgroundColor="transparent" />
      {fontsLoaded ? (
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      ) : <ActivityIndicator />}
    </>
  );
}
