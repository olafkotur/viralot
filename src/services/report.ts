import { IReportData, IHeatMapData, IReportInputData } from "../typings/report";
import { LocationService } from "./location";
import { IMapCoordinates } from "../typings/misc";
import moment from 'moment';
import { api } from "../config";
import * as _ from 'lodash';
import { IUserData } from "../typings/user";
import { StorageService } from "./storage";
import { HttpService } from './http';

export const ReportService = {
  getUserReports: async (): Promise<IReportData[]> => {
    // const userData: IUserData = await StorageService.retrieveSecureData('userData');
    const payload: Partial<IUserData> = { email: 'olafkotur97@gmail.com', password: 'poly123' };
    const res = await HttpService.post(`${api.url}/getUserReports`, payload);
    if (res.ok) {
      const json = await res.json();
      return _.sortBy(json.data, 'createdAt').reverse();
    }
    return [];
  },

  getHeatMapData: async (initialPosition: IMapCoordinates): Promise<IHeatMapData[]> => {
    // const userData: IUserData = await StorageService.retrieveSecureData('userData');
    const payload: Partial<IUserData> = { email: 'olafkotur97@gmail.com', password: 'poly123' };
    const res = await HttpService.post(`${api.url}/getHeatMap`, payload);
    if (res.ok) {
      const json = await res.json();
      return _.sortBy(json.data, 'createdAt').reverse();
    }
    return [];
  },

  saveReport: async (details: IReportInputData): Promise<void> => {
    const currentLocation = await LocationService.getCurrentPosition();
    const payload: IReportData = {
      ...details,
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude,
      createdAt: moment().unix(),
    };

    await HttpService.post(`${api.url}/createReport`, payload);
  },
};
