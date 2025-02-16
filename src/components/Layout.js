import React from 'react';

import Head from './Head';
import TopBar from './TopBar';
import Footer from './Footer';

import '../styles/base.css';
import '../styles/variables.css';
import '../styles/fonts.css';

import * as css from './Layout.module.css';

const Layout = ({ children, title }) => {
  return (
    <div className={css.container}>
      <Head title={title} />
      <div className={css.content}>
        <TopBar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
