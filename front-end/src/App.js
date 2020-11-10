import Header from './Header'
import Footer from './Footer'
import Main from './Main'

import {useState} from 'react';
import './App.css';
/** @jsx jsx */
import { jsx } from '@emotion/core'

const styles = {
  root: {
    
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(209,209,209)',
    
    padding: '50px',
  },
}

export default ({ }) => {
  
  return (  
    <div className="App" css={styles.root}>
        <Header />
        <Main />
        <Footer/>
    </div>
  );
}
