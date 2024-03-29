import React from 'react';
import { BookmarkModel } from 'src/store/bookmarks/bookmarks.interfaces';
import IconBack from 'src/icons/flat-icons/back';

interface ComponentProps {
  items: BookmarkModel[];
  selected: string;
  open: (id: string) => void;
}

const Back: React.FC<ComponentProps> = ({ items, selected, open }) => {
  if (selected === '') return null;

  const handleClick = () => {
    const currentItem = items.find((item) => item._id === selected);
    open(currentItem.parent);
  };

  const handleContext = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
  };

  return (
    <div
      className="bookmarks__item bookmarks__folder bookmarks__back"
      onClick={handleClick}
      onContextMenu={handleContext}
    >
      <IconBack />
      <span className="bookmarks__label">...</span>
    </div>
  );
};

export default Back;
