import React from 'react';
import { BookmarkModel } from 'src/store/bookmarks/bookmarks.interfaces';
import IconFile from 'src/icons/flat-icons/file';

interface ComponentProps {
  item: BookmarkModel;
}

const File: React.FC<ComponentProps> = ({ item }) => {
  const { label, url } = item;

  return (
    <div className="bookmarks__item bookmarks__file">
      <a href={url} target="_blank" rel="noreferrer">
        <IconFile />
        <span className="bookmarks__label">{label}</span>
      </a>
    </div>
  );
};

export default File;
