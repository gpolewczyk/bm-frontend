import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store/store.interfaces';
import { BookmarkModel } from 'src/store/bookmarks/bookmarks.interfaces';
import { setSelectedBookmark, setEditedBookmark } from 'src/store/bookmarks/bookmarks.actions';
import { sortByLabel } from 'src/utils/sort';
import useModal from 'src/hooks/use-modal';
import Back from 'src/components/items/back';
import File from 'src/components/items/file';
import Folder from 'src/components/items/folder';

interface ComponentProps {
  items: BookmarkModel[];
}

const List: React.FC<ComponentProps> = ({ items }) => {
  const { openModal } = useModal();
  const { selected } = useSelector((state: RootState) => state.bookmarks);
  const dispatch = useDispatch();

  const selectBookmark = (id: string) => {
    dispatch(setSelectedBookmark(id));
  };

  const editBookmark = (id: string) => {
    dispatch(setEditedBookmark(id));
    openModal('edit');
  };

  const rootFolders = items.filter((item) => item.url === '' && item.parent === selected);
  const rootFiles = items.filter((item) => item.url !== '' && item.parent === selected);

  const sortedFolders = sortByLabel(rootFolders);
  const sortedFiles = sortByLabel(rootFiles);

  return (
    <div className="bookmarks__list">
      <Back items={items} selected={selected} open={selectBookmark} />
      {sortedFolders.map((item) => (
        <Folder key={item._id} item={item} open={selectBookmark} edit={editBookmark} />
      ))}
      {sortedFiles.map((item) => (
        <File key={item._id} item={item} edit={editBookmark} />
      ))}
    </div>
  );
};

export default List;
