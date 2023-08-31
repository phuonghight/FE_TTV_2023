import { localStorageEnum } from '@enums/authEnum';
import { login } from '@/api/user.api';
import type { IUserLogin } from '@/types/user.types';

interface IAuthState {
  acccesToken: string | null;
  redirect?: URL;
}

export const useAuthStore = defineStore('authStore', {
  state: (): IAuthState => {
    return {
      acccesToken: localStorage.getItem(localStorageEnum.ACCESS_TOKEN) || null
    };
  },
  actions: {
    async login(userLogin: IUserLogin): Promise<void> {
      const { data } = await login(userLogin);
      this.acccesToken = data.data.access_token;
      localStorage.setItem(localStorageEnum.ACCESS_TOKEN, this.acccesToken);
    },
    logout(): void {
      this.acccesToken = '';
      localStorage.removeItem(localStorageEnum.ACCESS_TOKEN);
    }
  }
});
