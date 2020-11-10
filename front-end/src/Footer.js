import React from 'react';

import {useState} from 'react';
import './App.css';
/** @jsx jsx */
import { jsx } from '@emotion/core'

const styles = {
  footer: {
    border: ' 2px solid black',
    height: '57px',
    backgroundColor: 'rgba(180,180,180)',
    flexShrink: 0,
  },
 
  title: {
    color: 'black',
  },
}


class Footer extends React.Component{

    render(){
        return <footer className="App-footer" style={styles.footer}>
        <h1 css={styles.title}><center>Bienvenue sur l'application ! </center></h1>
      </footer>
    }
  }

  export default Footer