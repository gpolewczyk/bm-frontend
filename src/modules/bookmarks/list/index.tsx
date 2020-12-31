import React from 'react';
import useGetBookmarks from 'src/hooks/use-get-bookmarks';
import ItemsList from 'src/components/items/list';
import Loading from 'src/components/loading';

const Bookmarks: React.FC = () => {
  const { data, status } = useGetBookmarks();

  if (status === 'loading') return <Loading />;
  if (status === 'error') return <div>Error...</div>;

  return (
    <div className="bookmarks">
      <ItemsList items={data} />
    </div>
  );
};

export default Bookmarks;
