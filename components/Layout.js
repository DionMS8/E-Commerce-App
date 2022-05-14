import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>E-Commerce Website</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Glamazon</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
