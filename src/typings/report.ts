export interface ICoordinates {
  longitude: number;
  latitude: number;
}

export interface IReportData extends ICoordinates {
  locationName: string;
  description: string;
  createdAt: number;
}

export interface IHeatMapData extends ICoordinates {
}