import { Roboto_400Regular, Roboto_400Regular_Italic, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { ActivityIndicator, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import Routes from './src/routes';
import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold, Roboto_400Regular_Italic })

  return (
    <>
      <StatusBar translucent barStyle='dark-content' backgroundColor="transparent" />

      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>

          {fontsLoaded ? <Routes /> : <ActivityIndicator />}

        </ThemeProvider>
      </GestureHandlerRootView>
    </>
  );
}
