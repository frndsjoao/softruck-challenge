export type RoutesProps = {
  home: undefined
  signIn: undefined;
  routeDetail: { trace: any };
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RoutesProps { }
  }
}