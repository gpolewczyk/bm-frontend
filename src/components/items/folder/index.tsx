import React from 'react';
import { BookmarkModel } from 'src/store/bookmarks/bookmarks.interfaces';
import IconFolder from 'src/icons/flat-icons/folder';

interface ComponentProps {
  item: BookmarkModel;
  open: (id: string) => void;
  edit: (id: string) => void;
}

const Folder: React.FC<ComponentProps> = ({ item, open, edit }) => {
  const { _id, label } = item;

  const handleClick = () => {
    open(_id);
  };

  const handleContext = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    edit(_id);
  };

  return (
    <div className="bookmarks__item bookmarks__folder" onClick={handleClick} onContextMenu={handleContext}>
      <IconFolder />
      <span className="bookmarks__label">{label}</span>
    </div>
  );
};

export default Folder;
