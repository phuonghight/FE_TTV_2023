import { api } from '@axios';
import type { APIUserResponse } from '@/types/user.types';

export const getUserById = (userId: string) => {
  return api.get<APIUserResponse>(`/users/${userId}`);
};
