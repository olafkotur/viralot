import * as SecureStore from 'expo-secure-store';

type TSecureStorage = 'userData';

export const StorageService = {
  storeSecureData: async (key: TSecureStorage, data: object): Promise<void> => {
    return await SecureStore.setItemAsync(key, JSON.stringify(data));
  },

  retrieveSecureData: async (key: TSecureStorage): Promise<any> => {
    const raw = await SecureStore.getItemAsync(key);
    return JSON.parse(raw || '{}');
  },
};