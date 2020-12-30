import { SET_USER_LOGIN, SET_USER_LOGOUT } from 'src/store/user/user.const';

export interface UserModel {
  id: string;
  email: string;
  username: string;
  token: string;
}

export interface UserState {
  isLoggedIn: boolean;
  user: UserModel | null;
}

export interface SetUserLogin {
  type: typeof SET_USER_LOGIN;
  payload: UserModel;
}

export interface SetUserLogout {
  type: typeof SET_USER_LOGOUT;
}

export type UserActions = SetUserLogin | SetUserLogout;
