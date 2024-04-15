export type RoutesProps = {
  home: undefined
  signIn: undefined;
  routeDetail: { trace: any };
  vehicleRoutes: { plate: string }
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RoutesProps { }
  }
}