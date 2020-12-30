import { Dispatch } from 'react';
import { SET_SELECTED_BOOKMARK } from 'src/store/bookmarks/bookmarks.const';
import { SetSelectedBookmark } from './bookmarks.interfaces';

export const setSelectedBookmark = (payload: string) => (dispatch: Dispatch<SetSelectedBookmark>): void => {
  dispatch({ type: SET_SELECTED_BOOKMARK, payload });
};
