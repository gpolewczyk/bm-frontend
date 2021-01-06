import { SET_SELECTED_BOOKMARK, SET_EDITED_BOOKMARK } from 'src/store/bookmarks/bookmarks.const';
import { BookmarkState, BookmarkActions } from 'src/store/bookmarks/bookmarks.interfaces';

const initialState: BookmarkState = {
  selected: '',
  edited: '',
};

const bookmarksReducer = (state = initialState, action: BookmarkActions): BookmarkState => {
  switch (action.type) {
    case SET_SELECTED_BOOKMARK: {
      return { ...state, selected: action.payload };
    }
    case SET_EDITED_BOOKMARK: {
      return { ...state, edited: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default bookmarksReducer;
