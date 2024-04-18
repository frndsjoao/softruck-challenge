import { useEffect, useMemo, useRef } from 'react'
import MapView, { MapMarker, Marker, MarkerAnimated } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { useTheme } from 'styled-components/native'
import { CourseType } from '../../@types/course'
import { getLimitWaypoints } from '../../utils/getWaypoints'
import VehicleMarker from './VehicleMarker'

interface MapProps {
  data: CourseType;
  currentCoordinate: { latitude: number, longitude: number, direction: number };
  path: {
    origin: { latitude: number, longitude: number, direction: number },
    destination: { latitude: number, longitude: number, direction: number },
  }
}

const googleMapsApiKey = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY

export default function Map({ path, data, currentCoordinate }: MapProps) {
  const { COLORS } = useTheme()
  const mapRef = useRef<MapView>(null)
  const markerRef = useRef<MapMarker>(null)

  const waypoints = getLimitWaypoints(data.gps)

  const vehicleDesign = useMemo(() => Math.round(Math.random() * 7), [])

  useEffect(() => {
    if (!path.origin || !path.destination) return

    mapRef?.current?.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 100, right: 100, bottom: 100, left: 100 }
    })
  }, [])

  return (
    <MapView
      ref={mapRef}
      style={{ flex: 1 }}
      mapType='mutedStandard'
      initialRegion={{
        latitude: path.origin.latitude,
        longitude: path.origin.longitude,
        latitudeDelta: 0.04,
        longitudeDelta: 0.09,
      }}
    >
      <MarkerAnimated
        ref={markerRef}
        identifier="origin"
        coordinate={currentCoordinate}
      >
        <VehicleMarker position={currentCoordinate.direction} vehiclePattern={vehicleDesign} />
      </MarkerAnimated>
      <Marker
        coordinate={path.destination}
        identifier='destination'
      />

      <MapViewDirections
        origin={path.origin}
        destination={path.destination}
        apikey={`${googleMapsApiKey}`}
        strokeWidth={3}
        strokeColor={COLORS.BLUE_500}
        waypoints={waypoints}
      />
    </MapView>
  )
}