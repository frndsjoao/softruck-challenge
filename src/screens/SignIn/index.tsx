import { useNavigation } from '@react-navigation/native';
import { getLocales } from 'expo-localization';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import { i18n } from '../../translations/i18n';
import { Container, Flag, LanguageContainer, LogoWrapper, Span } from './styles';

export default function SignInScreen() {
  const [locale, setLocale] = useState(getLocales()[0].languageCode || 'en')
  const navigation = useNavigation()

  i18n.enableFallback = true
  i18n.locale = locale

  function handleSignIn() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'home' }]
    })
  }

  return (
    <Container>
      <LogoWrapper>
        <Logo width={180} height={45} />
        <Span>{i18n.t('login.softruckSpan')}</Span>
      </LogoWrapper>

      <Button
        onPress={handleSignIn}
        label={i18n.t('login.signIn')}
      />

      <LanguageContainer>
        <TouchableOpacity onPress={() => setLocale('es')}>
          <Flag>🇪🇸</Flag>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setLocale('pt')}>
          <Flag>🇧🇷</Flag>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setLocale('en')}>
          <Flag>🇺🇸</Flag>
        </TouchableOpacity>
      </LanguageContainer>
    </Container>
  )
}