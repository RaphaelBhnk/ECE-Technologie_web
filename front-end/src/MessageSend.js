import React from 'react';
import {useState} from 'react';

const styles = {
  form: {
    borderTop: '2px solid #373B44',
    padding: '.5rem',
    display: 'flex',
  },
  content: {
    flex: '1 1 auto',
    marginRight: '.5rem'
  }
}

class MessageSend extends React.Component{

  constructor (props) {
    super(props)
    this.state = {
      texte: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const message = e.target.texte
  }

  handleSubmit (e) {
    e.preventDefault()

  }

  render(){
    return <form css={styles.form} onSubmit={this.handleSubmit}>

      <input type="input" name="content" css={styles.content} />
      <button className="btn btn-primary">Envoyer</button>

    </form>
  }
}

export default MessageSend
