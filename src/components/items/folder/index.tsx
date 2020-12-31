import React from 'react';
import { BookmarkModel } from 'src/store/bookmarks/bookmarks.interfaces';
import IconFolder from 'src/icons/flat-icons/folder';

interface ComponentProps {
  item: BookmarkModel;
  open: (id: string) => void;
}

const Folder: React.FC<ComponentProps> = ({ item, open }) => {
  const { _id, label } = item;

  const handleClick = () => {
    open(_id);
  };

  return (
    <div className="bookmarks__item bookmarks__folder" onClick={handleClick}>
      <IconFolder />
      {label}
    </div>
  );
};

export default Folder;
