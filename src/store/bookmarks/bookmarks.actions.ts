import { Dispatch } from 'react';
import { SET_SELECTED_BOOKMARK, SET_EDITED_BOOKMARK } from 'src/store/bookmarks/bookmarks.const';
import { SetSelectedBookmark, SetEditedBookmark } from './bookmarks.interfaces';

export const setSelectedBookmark = (payload: string) => (dispatch: Dispatch<SetSelectedBookmark>): void => {
  dispatch({ type: SET_SELECTED_BOOKMARK, payload });
};

export const setEditedBookmark = (payload: string) => (dispatch: Dispatch<SetEditedBookmark>): void => {
  dispatch({ type: SET_EDITED_BOOKMARK, payload });
};
