import { IReportData, IHeatMapData, IReportInputData } from "../typings/report";
import { LocationService } from "./location";
import { IMapCoordinates } from "../typings/misc";
import moment from 'moment';
import { api } from "../config";
import * as _ from 'lodash';

export const ReportService = {
  getUserReports: async (): Promise<IReportData[]> => {
    const res = await fetch(`${api.url}/getUserReports`);
    if (res.ok) {
      const json = await res.json();
      return _.sortBy(json.data, 'createdAt').reverse();
    }
    return [];
  },

  getHeatMapData: async (initialPosition: IMapCoordinates): Promise<IHeatMapData[]> => {
    const res = await fetch(`${api.url}/getHeatMap`);
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

    await fetch(`${api.url}/createReport`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json', 
        Accept: 'application/json',
      },
    });
  },
};
