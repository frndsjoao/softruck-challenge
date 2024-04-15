import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { VehicleType } from '../../@types/vehicle';
import { formatLicensePlate } from '../../utils/formatLicensePlate';
import { Container, Image, Model, Plate } from './styles';

interface VehicleCardProps {
  data: VehicleType
}

export default function VehicleCard({ data }: VehicleCardProps) {
  const navigation = useNavigation()

  function handleVehicleRoutes() {
    navigation.navigate('vehicleRoutes', { data: data })
  }

  return (
    <Container onPress={handleVehicleRoutes}>
      <Image source={{ uri: data.picture?.address }} />
      <View>
        <Plate>{formatLicensePlate(data.plate)}</Plate>
        <Model>Car model XYZ 2.0</Model>
      </View>
    </Container>
  )
}