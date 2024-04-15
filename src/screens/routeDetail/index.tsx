import Icon from '@expo/vector-icons/MaterialIcons'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components/native'
import { RoutesProps } from '../../@types/navigation'
import BottomSheetComponent from '../../components/BottomSheet'
import BottomSheetDetailCard from '../../components/BottomSheetDetailCard'
import { formatDistance } from '../../utils/formatDistance'
import { formatDuration } from '../../utils/formatDuration'
import { formatToHour } from '../../utils/formatToHour'
import { Address, AddressWrapper, BottomSheetContainer, Divider, Hour, MapView, ReturnButton, Span, Title } from './styles'

type RouteDetailScreenProp = RouteProp<RoutesProps, 'routeDetail'>
type RouteDetailProps = {
  route: RouteDetailScreenProp
}

export default function RouteDetailScreen({ route }: RouteDetailProps) {
  const { data } = route.params
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()
  const { COLORS } = useTheme()

  const getGpsLastPosition = data.gps.length

  const startAddress = data.gps[0].address
  const endAddress = data.gps[getGpsLastPosition - 1].address

  return (
    <>
      <View style={{ backgroundColor: COLORS.WHITE, paddingTop: insets.top }} />

      <ReturnButton
        style={{ top: insets.top + 15 }}
        onPress={() => navigation.goBack()}
      >
        <Icon name='keyboard-arrow-left' size={32} color={COLORS.BLUE_500} />
      </ReturnButton>

      <MapView />

      <BottomSheetComponent>
        <BottomSheetContainer>
          <Title>Percurso</Title>

          <AddressWrapper>
            <Icon name='circle' size={12} color={COLORS.BLUE_600} />
            <Address>{startAddress}</Address>
            <Hour>{formatToHour(data.start_at)}</Hour>
          </AddressWrapper>

          <AddressWrapper>
            <Icon name='location-pin' size={16} color={COLORS.BLUE_600} />
            <Address>{endAddress}</Address>
            <Hour>{formatToHour(data.end_at)}</Hour>
          </AddressWrapper>

          <Span>Clique no endereço de partida para ver o trajeto.</Span>
          <Divider />
        </BottomSheetContainer>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 20, paddingRight: 10 }}
        >
          <BottomSheetDetailCard
            label="Distância"
            icon='map'
            value={formatDistance(data.distance)}
            color={COLORS.BLUE_600}
          />
          <BottomSheetDetailCard
            label="Duração"
            icon="timer"
            value={formatDuration(data.duration)}
            color={COLORS.BLUE_500}
          />
          <BottomSheetDetailCard
            label="Paradas"
            icon="stop-circle"
            value={data.stops}
            color={COLORS.BLUE_400}
          />
          <BottomSheetDetailCard
            label="Velocidade média"
            icon="speed"
            value={`${data.speed_avg.toFixed(1)}km/h`}
            color={COLORS.BLUE_300}
          />
          <BottomSheetDetailCard
            label="Velocidade máxima"
            icon="speed"
            value={`${data.speed_max.toFixed(1)}km/h`}
            color={COLORS.BLUE_200}
          />
        </ScrollView>
      </BottomSheetComponent>
    </>
  )
}