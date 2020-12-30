import { applyMiddleware, combineReducers, createStore } from 'redux';
import { RootState } from 'src/store/store.interfaces';
import bookmarksReducer from './bookmarks/bookmarks.reducer';
import modalReducer from 'src/store/modal/modal.reducer';
import userReducer from 'src/store/user/user.reducer';
import thunk from 'redux-thunk';

const combinedReducers = combineReducers<RootState>({
  bookmarks: bookmarksReducer,
  modal: modalReducer,
  user: userReducer,
});

const store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;
