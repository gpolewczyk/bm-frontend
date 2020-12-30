import store from 'src/store';
import { decodeToken } from '../jwt';
import { sessionGet } from '../storage';

export const init = (): undefined => {
  const token = sessionGet('token');

  if (token) {
    const payload = decodeToken(token);
    store.dispatch({ type: 'SET_USER_LOGIN', payload });
  }

  return undefined;
};
