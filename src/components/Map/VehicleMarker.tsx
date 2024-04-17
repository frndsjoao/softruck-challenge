import React from 'react';
import { Image, View } from 'react-native';

interface VehicleMarker {
  position: number;
  vehiclePattern?: number;
}

export default function VehicleMarker({ position, vehiclePattern = 0 }: VehicleMarker) {
  const imageSize = 256
  const positionResolved = (position + 135) % 360
  const spriteX = (Math.floor(positionResolved / 45) * imageSize) / 8
  const spriteY = (vehiclePattern * imageSize) / 8

  console.log('position: ', positionResolved)

  return (
    <View style={{ width: 32, height: 32, overflow: 'hidden' }}>
      <Image
        source={require('../../assets/vehicles.png')}
        style={{
          width: imageSize,
          height: imageSize,
          left: -spriteX,
          top: -spriteY
        }}
        resizeMode='cover'
        alt='Vehicle'
      />
    </View>
  )
}