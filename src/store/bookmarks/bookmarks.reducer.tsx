import { SET_SELECTED_BOOKMARK } from 'src/store/bookmarks/bookmarks.const';
import { BookmarkState, BookmarkActions } from 'src/store/bookmarks/bookmarks.interfaces';

const initialState: BookmarkState = {
  selected: '',
};

const bookmarksReducer = (state = initialState, action: BookmarkActions): BookmarkState => {
  switch (action.type) {
    case SET_SELECTED_BOOKMARK: {
      return { ...state, selected: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default bookmarksReducer;
