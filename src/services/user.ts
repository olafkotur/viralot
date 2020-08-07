import { StorageService } from "./storage";
import { IUserData } from "../typings/user";

export const UserService = {
  saveSettings: async (userData: IUserData): Promise<void> => {
    await StorageService.storeSecureData('userData', userData);
  }
};
