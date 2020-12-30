import React from 'react';
import Layout from 'src/components/layout';
import Bookmarks from 'src/modules/bookmarks/list';

const Index: React.FC = () => {
  return (
    <div className="app">
      <Layout>
        <Bookmarks />
      </Layout>
    </div>
  );
};

export default Index;
