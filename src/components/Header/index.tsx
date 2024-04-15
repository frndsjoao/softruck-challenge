import Icon from '@expo/vector-icons/MaterialIcons'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components/native'
import LogoMinimal from '../../assets/logo_minimal.svg'
import { DrawerMenu, HeaderContainer, IconWrapper } from './styles'

export default function Header() {
  const insets = useSafeAreaInsets()
  const { COLORS } = useTheme()

  return (
    <>
      <View style={{ backgroundColor: COLORS.OFF_WHITE, paddingTop: insets.top }} />
      <HeaderContainer>
        <LogoMinimal width={45} height={45} />

        <DrawerMenu>
          <IconWrapper>
            <Icon name='person' size={32} color={COLORS.WHITE} />
          </IconWrapper>
        </DrawerMenu>
      </HeaderContainer>
    </>
  )
}