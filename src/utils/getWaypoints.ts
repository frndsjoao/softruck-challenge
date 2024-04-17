export function getLimitWaypoints(
  mapViewDirectionsData: { latitude: number; longitude: number }[],
) {
  return mapViewDirectionsData.length >= 25
    ? mapViewDirectionsData.slice(0, 24)
    : mapViewDirectionsData.slice(1, -1)
}