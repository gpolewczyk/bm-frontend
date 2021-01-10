import store from 'src/store';
import { decodeToken } from '../jwt';
import { sessionGet } from '../storage';

export const init = (): undefined => {
  const token = sessionGet('token');
  const bookmark = sessionGet('bookmark');

  if (token) {
    const payload = decodeToken(token);
    store.dispatch({ type: 'SET_USER_LOGIN', payload });
  }

  if (bookmark) {
    const payload = bookmark;
    store.dispatch({ type: 'SET_SELECTED_BOOKMARK', payload });
  }

  return undefined;
};
