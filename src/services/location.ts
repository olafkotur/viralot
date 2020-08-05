import * as Location from 'expo-location';
import { IMapCoordinates } from '../typings/misc';
import { map } from '../config';


export const LocationService = {
  getCurrentPosition: async (): Promise<IMapCoordinates> => {
    const status = await Location.requestPermissionsAsync();
    if (!status.granted) {
      alert('Permission to location needs to granted');
    }

    const response = await Location.getCurrentPositionAsync();
    return {
      latitude: response.coords.latitude || 0,
      longitude: response.coords.longitude || 0,
      latitudeDelta: map.latitudeDelta,
      longitudeDelta: map.longitudeDelta,
    };
  },
};
