import React from 'react';
import Modals from 'src/modules/modals';
import Nav from 'src/modules/nav';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Modals />
      <Nav />
      {children}
    </>
  );
};

export default Layout;
