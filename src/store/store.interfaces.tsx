import { BookmarkState } from './bookmarks/bookmarks.interfaces';
import { ModalState } from 'src/store/modal/modal.interfaces';
import { UserState } from 'src/store/user/user.interfaces';

export interface RootState {
  bookmarks: BookmarkState;
  modal: ModalState;
  user: UserState;
}
