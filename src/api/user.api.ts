import { apiDefault } from '@axios';
import type { IUserLogin, UserLoginResponse } from '@/types/user.types';

export const login = (userLogin: IUserLogin) => {
  return apiDefault.post<UserLoginResponse>(`/login`, userLogin);
};
