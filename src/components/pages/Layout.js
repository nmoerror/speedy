import React from 'react';
import Header from '../elements/Header/Header';
import Footer from '../elements/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
