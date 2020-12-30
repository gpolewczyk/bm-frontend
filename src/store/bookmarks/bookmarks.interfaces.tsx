import { SET_SELECTED_BOOKMARK } from 'src/store/bookmarks/bookmarks.const';

export interface BookmarkModel {
  _id: string;
  parent: string;
  label: string;
  url: string;
}

export interface BookmarkState {
  selected: string;
}

export interface SetSelectedBookmark {
  type: typeof SET_SELECTED_BOOKMARK;
  payload: string;
}

export type BookmarkActions = SetSelectedBookmark;
