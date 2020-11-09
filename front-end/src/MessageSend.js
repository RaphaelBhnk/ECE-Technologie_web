import React from 'react';
import {useState} from 'react';
import './App.css';
/** @jsx jsx */
import { jsx } from '@emotion/core'
const styles = {
  root: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#565E71',
    padding: '50px',
  },
  header: {
    height: '60px',
    backgroundColor: 'rgba(255,255,255,.3)',
    flexShrink: 0,
  },
  headerLogIn: {
    backgroundColor: 'red',
  },
  headerLogOut: {
    backgroundColor: 'blue',
  },
  footer: {
    height: '30px',
    backgroundColor: 'rgba(255,255,255,.3)',
    flexShrink: 0,
  },
  main: {
    backgroundColor: '#373B44',
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  channels: {
    minWidth: '200px',
  },
  channel: {
    height: '100%',
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  messages: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
    '& ul': {
      'margin': 0,
      'padding': 0,
      'textIndent': 0,
      'listStyleType': 0,
    },
  },
  message: {
    margin: '.2rem',
    padding: '.2rem',
    // backgroundColor: '#66728E',
    ':hover': {
      backgroundColor: 'rgba(255,255,255,.2)',
    },
  },
  form: {
    borderTop: '2px solid #373B44',
    padding: '.5rem',
    display: 'flex',
  },
  content: {
    flex: '1 1 auto',
    marginRight: '.5rem'
  },
  send: {
    backgroundColor: '#D6DDEC',
    padding: '.2rem .5rem',
    border: 'none',
    ':hover': {
      backgroundColor: '#2A4B99',
      cursor: 'pointer',
      color: '#fff',
    },
  },
  
}

class MessageSend extends React.Component{

  constructor (props) {
    super(props)
    this.state = {
      texte: ''
    }

    //this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

   handleChange (e) {
    this.setState({
      texte:document.getElementById("content").value
      },()=>this.props.clickHandler(document.getElementById("content").value));  
    }

  handleSubmit (e) {
    this.setState({
      texte:document.getElementById("content")
      },()=>this.props.clickHandler(this.state.texte));  
    }

  render(){
    return (
    <form css={styles.form} onSubmit={this.handleSubmit}>
      <input type="text" name="content" css={styles.content} />
       {/* <button className="btn btn-primary" onClick={this.handleChange}>{this.state.texte}</button>  */}
       <input type="submit" value="Envoyer" /> 
    </form>);
  }
}

export default MessageSend