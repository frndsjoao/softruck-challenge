export function formatDistance(distanceInMeters: number) {
  if (distanceInMeters < 1000) {
    return `${distanceInMeters} metros`
  } else {
    const distanceInKilometers = (distanceInMeters / 1000).toFixed(2)
    return `${distanceInKilometers} km`
  }
}