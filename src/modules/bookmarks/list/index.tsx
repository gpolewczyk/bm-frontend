import React from 'react';
import useGetBookmarks from 'src/hooks/use-get-bookmarks';
import ItemsList from 'src/components/items/list';

const Bookmarks: React.FC = () => {
  const { data, status } = useGetBookmarks();

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'error') return <div>Error...</div>;

  return (
    <div className="bookmarks">
      <ItemsList items={data} />
    </div>
  );
};

export default Bookmarks;
