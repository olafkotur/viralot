import { IReportData } from "../typings/report";
import { LocationService } from "./location";

export const ReportService = {
  getUserReports: async (): Promise<IReportData[]> => {
    const data: IReportData[] = [
      {
        locationName: 'South Bank, London',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        latitude: 51.505209,
        longitude: -0.111338,
        createdAt: 1596541532,
      },
      {
        locationName: 'New Parks, Leicester',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        latitude: 52.646445,
        longitude: -1.177786,
        createdAt: 1596541532,
      },
      {
        locationName: 'Notting Hill, London',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        latitude: 51.514413,
        longitude: -0.208135,
        createdAt: 1596541532,
      },
    ];
    return data;
  },
};
