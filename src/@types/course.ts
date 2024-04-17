export type CourseType = {
  start_at: string;
  end_at: string;
  distance: number;
  speed_max: number;
  stops: number;
  total_stop_time: number;
  gps_count: number;
  duration: number;
  speed_avg: number;
  gps: GpsType[]
}

type GpsType = {
  longitude: number;
  latitude: number;
  acquisition_time_unix: number;
  speed: number;
  direction: number;
  acquisition_time: string;
  address?: string;
}

export type Coordinates = {
  latitude: number
  longitude: number
}