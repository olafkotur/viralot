import * as Location from 'expo-location';
import { IMapCoordinates } from '../typings/misc';
import { map } from '../config';


export const LocationService = {
  getCurrentPosition: async (): Promise<IMapCoordinates> => {
    const status = await Location.requestPermissionsAsync();
    if (status.granted) {
      const response = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
      return {
        latitude: response.coords.latitude || 0,
        longitude: response.coords.longitude || 0,
        latitudeDelta: map.latitudeDelta,
        longitudeDelta: map.longitudeDelta,
      };
    }

    alert('Location services need to be granted to use the app. Please allow location permissions in your device settings.');
    return { latitude: 0, longitude: 0, latitudeDelta: 100, longitudeDelta: 100 };
  },
};
