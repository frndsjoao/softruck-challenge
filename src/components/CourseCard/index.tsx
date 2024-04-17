import Icon from '@expo/vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { CourseType } from '../../@types/course'
import { Address, AddressContent, AddressType, AddressWrapper, Container } from './styles'

interface CourseCardProps {
  data: CourseType
}

export default function CourseCard({ data }: CourseCardProps) {
  const { COLORS } = useTheme()
  const navigation = useNavigation()
  const getGpsLastPosition = data.gps.length

  const startAddress = data.gps[0].address
  const endAddress = data.gps[getGpsLastPosition - 1].address

  function handleRouteDetails() {
    navigation.navigate('routeDetail', { data: data })
  }

  return (
    <Container onPress={handleRouteDetails}>
      <AddressWrapper>
        <Icon name='circle' size={12} color={COLORS.GREEN} />
        <AddressContent>
          <AddressType>Partida</AddressType>
          <Address>{startAddress}</Address>
        </AddressContent>
      </AddressWrapper>

      <AddressWrapper>
        <Icon name='location-pin' size={16} color={COLORS.RED} />
        <AddressContent>
          <AddressType>Destino</AddressType>
          <Address>{endAddress}</Address>
        </AddressContent>
      </AddressWrapper>
    </Container>
  )
}