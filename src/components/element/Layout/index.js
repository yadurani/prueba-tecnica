import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../section/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container fluid className="px-0" id="wrapper">
        {children}
      </Container>
    </>
  );
};

export default Layout;
