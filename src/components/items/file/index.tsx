import React from 'react';
import { BookmarkModel } from 'src/store/bookmarks/bookmarks.interfaces';
import IconFile from 'src/icons/flat-icons/file';

interface ComponentProps {
  item: BookmarkModel;
  edit: (id: string) => void;
}

const File: React.FC<ComponentProps> = ({ item, edit }) => {
  const { _id, label, url } = item;

  const handleContext = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    edit(_id);
  };

  return (
    <div className="bookmarks__item bookmarks__file" onContextMenu={handleContext}>
      <a href={url} target="_blank" rel="noreferrer">
        <IconFile />
        <span className="bookmarks__label">{label}</span>
      </a>
    </div>
  );
};

export default File;
