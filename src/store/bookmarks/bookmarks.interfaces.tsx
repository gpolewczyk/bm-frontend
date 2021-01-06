import { SET_SELECTED_BOOKMARK, SET_EDITED_BOOKMARK } from 'src/store/bookmarks/bookmarks.const';

export interface BookmarkModel {
  _id: string;
  parent: string;
  label: string;
  url: string;
}

export interface BookmarkState {
  selected: string;
  edited: string;
}

export interface SetSelectedBookmark {
  type: typeof SET_SELECTED_BOOKMARK;
  payload: string;
}

export interface SetEditedBookmark {
  type: typeof SET_EDITED_BOOKMARK;
  payload: string;
}

export type BookmarkActions = SetSelectedBookmark | SetEditedBookmark;
