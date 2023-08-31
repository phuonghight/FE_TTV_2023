import type { UploadFileInfo } from 'naive-ui';

export interface IUserLogin {
  account: string;
  password: string;
}

export interface UserLoginResponse {
  data: {
    access_token: string;
  };
}

export interface IUser {
  fullName: string;
  course: string | number | null;
  phone: string;
  facebook: string;
  email: string;
}

export interface UserResponse extends IUser {
  id: string;
  image: string;
}

export interface APIUserResponse {
  code: number;
  message: string;
  error: string;
  data: {
    user: UserResponse;
  };
}
