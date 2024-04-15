import Icon from '@expo/vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components/native'
import LogoMinimal from '../../assets/logo_minimal.svg'
import { DrawerMenu, HeaderContainer, IconWrapper, LogoWrapper, ReturnIconWrapper } from './styles'

interface HeaderProps {
  canGoBack?: boolean
}

export default function Header({ canGoBack }: HeaderProps) {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()
  const { COLORS } = useTheme()

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


        <DrawerMenu>
          <IconWrapper>
            <Icon name='person' size={32} color={COLORS.WHITE} />
          </IconWrapper>
        </DrawerMenu>
      </HeaderContainer>
    </>
  )
}