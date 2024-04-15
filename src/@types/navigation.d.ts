import { CourseType } from "./course";
import { VehicleType } from "./vehicle";

export type RoutesProps = {
  home: undefined
  signIn: undefined;
  routeDetail: { data: CourseType };
  vehicleRoutes: { data: VehicleType }
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RoutesProps { }
  }
}