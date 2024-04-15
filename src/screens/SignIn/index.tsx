import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import { Container, LogoWrapper, Span } from './styles';

export default function SignInScreen() {
  const navigation = useNavigation()

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
        <Span>Reinventing vehicle tracking</Span>
      </LogoWrapper>

      <Button
        onPress={handleSignIn}
        label="Sign in"
      />
    </Container>
  )
}