import Icon from '@expo/vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { Alert, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components/native'
import LogoMinimal from '../../assets/logo_minimal.svg'
import { i18n } from '../../translations/i18n'
import { HeaderButtons, HeaderContainer, IconWrapper, LogoWrapper, ReturnIconWrapper } from './styles'

interface HeaderProps {
  canGoBack?: boolean
}

export default function Header({ canGoBack }: HeaderProps) {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()
  const { COLORS } = useTheme()

  function handleLogout() {
    Alert.alert(i18n.t('login.logoutMsg'), '', [
      { text: i18n.t('login.logoutBtnConfirm'), style: 'default', onPress: () => navigation.reset({ index: 0, routes: [{ name: 'signIn' }] }) },
      { text: i18n.t('login.logoutBtnCancel'), style: 'cancel' },
    ])
  }

  return (
    <>
      <View style={{ backgroundColor: COLORS.OFF_WHITE, paddingTop: insets.top }} />
      <HeaderContainer>
        <LogoWrapper>
          {canGoBack && (
            <ReturnIconWrapper onPress={() => navigation.goBack()}>
              <Icon name='keyboard-arrow-left' size={32} color={COLORS.BLUE_500} />
            </ReturnIconWrapper>
          )}
          <LogoMinimal width={45} height={45} />
        </LogoWrapper>


        <HeaderButtons>
          <IconWrapper>
            <Icon name='person' size={32} color={COLORS.WHITE} />
          </IconWrapper>
          <TouchableOpacity onPress={handleLogout}>
            <Icon name='logout' size={32} color={COLORS.BLUE_600} />
          </TouchableOpacity>
        </HeaderButtons>
      </HeaderContainer>
    </>
  )
}