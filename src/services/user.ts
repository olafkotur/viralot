import { StorageService } from "./storage";
import { IUserData } from "../typings/user";
import { HttpService } from "./http";
import { api } from "../config";

export const UserService = {
  signIn: async (credentials: Partial<IUserData>): Promise<boolean> => {
    const payload: Partial<IUserData> = { email: credentials.email, password: credentials.password };
    const res = await HttpService.post(`${api.url}/signIn`, payload);

    if (res.ok) {
      const json = await res.json();
      return json.auth.granted || false;
    }
    return false;
  },

  createUser: async (credentials: Partial<IUserData>): Promise<boolean> => {
    const payload: Partial<IUserData> = { email: credentials.email, password: credentials.password };
    const res = await HttpService.post(`${api.url}/createUser`, payload);

    if (res.ok) {
      const json = await res.json();
      return json.auth.granted || false;
    }
    return false;
  },

  saveSettings: async (userData: IUserData): Promise<void> => {
    await StorageService.storeSecureData('userData', userData);
  }
};
