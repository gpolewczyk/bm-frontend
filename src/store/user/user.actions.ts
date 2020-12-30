import { Dispatch } from 'react';
import { SET_USER_LOGIN, SET_USER_LOGOUT } from 'src/store/user/user.const';
import { SetUserLogin, SetUserLogout, UserModel } from './user.interfaces';

export const setUserLogin = (payload: UserModel) => (dispatch: Dispatch<SetUserLogin>): void => {
  dispatch({ type: SET_USER_LOGIN, payload });
};

export const setUserLogout = () => (dispatch: Dispatch<SetUserLogout>): void => {
  dispatch({ type: SET_USER_LOGOUT });
};
