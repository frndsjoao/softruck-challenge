import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { formatLicensePlate } from '../../utils/formatLicensePlate';
import { Container, Image, Model, Plate } from './styles';

interface VehicleCardProps {
  data: {
    plate: string;
    vin: string;
    color: string;
    picture?: { address?: string }
  }
}

export default function VehicleCard({ data }: VehicleCardProps) {
  const navigation = useNavigation()

  function handleVehicleRoutes() {
    navigation.navigate('vehicleRoutes', { plate: data.plate })
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