import React from 'react';

import {useState} from 'react';
import './App.css';
/** @jsx jsx */
import { jsx } from '@emotion/core'

const styles = {
    channels: {
        minWidth: '200px',
      }
  }
  
  class Channels extends React.Component{
  
    constructor (props) {
      super(props)
      this.state = {
        texte: ''
      }
    }
  
    render(){
        return <div css={styles.channels}>
        </div>
    }
  }

  export default Channels