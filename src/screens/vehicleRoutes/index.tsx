import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { FlatList, View } from 'react-native';
import response from '../../../frontend_data_gps.json';
import { RoutesProps } from '../../@types/navigation';
import CourseCard from '../../components/CourseCard';
import Header from '../../components/Header';
import { i18n } from '../../translations/i18n';
import { formatDistance } from '../../utils/formatDistance';
import { formatLicensePlate } from '../../utils/formatLicensePlate';
import { Container, Divider, EmptyList, Image, VehicleBoldDescription, VehicleDescription, VehicleInformation, VehicleTitle } from './styles';

type VehicleRoutesScreenProp = RouteProp<RoutesProps, 'vehicleRoutes'>
type VehicleRoutesProps = {
  route: VehicleRoutesScreenProp
}

export default function VehicleRoutesScreen({ route }: VehicleRoutesProps) {
  const { data } = route.params

  return (
    <>
      <Header canGoBack />

      <Container>
        <VehicleInformation>
          <Image source={{ uri: data.picture?.address }} />
          <View>
            <VehicleTitle>{formatLicensePlate(data.plate)}</VehicleTitle>
            <VehicleDescription>Car model XYZ 2.0</VehicleDescription>
            <VehicleDescription>{i18n.t('vehicleRoutes.travelLog') + formatDistance(response.total_distance)}</VehicleDescription>
            <VehicleBoldDescription>{i18n.t('vehicleRoutes.totalRoutes') + response.num_courses}</VehicleBoldDescription>
          </View>
        </VehicleInformation>

        <Divider />

        <FlatList
          data={response.courses}
          keyExtractor={(item) => item.start_at}
          renderItem={({ item }) => <CourseCard data={item} />}
          contentContainerStyle={{ paddingBottom: 120 }}
          ListEmptyComponent={() => <EmptyList>{i18n.t('vehicleRoutes.emptyRoutesList')}</EmptyList>}
        />

      </Container>
    </>
  )
}