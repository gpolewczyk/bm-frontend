import { BookmarkModel } from 'src/store/bookmarks/bookmarks.interfaces';

export const sortByLabel = (array: BookmarkModel[]): BookmarkModel[] => {
  return array.sort((a, b) => {
    if (a.label.toLowerCase() < b.label.toLowerCase()) return -1;
    if (a.label.toLowerCase() > b.label.toLowerCase()) return 1;
  });
};
