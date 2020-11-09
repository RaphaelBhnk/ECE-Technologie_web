import React from 'react';
import Messages from './Messages'
import MessageSend from './MessageSend'

const styles = {
    channel: {
        height: '100%',
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      },
  }
  
  class Channel extends React.Component{
  
    constructor (props) {
      super(props)
      this.state = {
        texte: ''
      }
    }
  
    render(){
        return <div css={styles.channel}>
        <Messages />
        <MessageSend />
      </div>
    }
  }

  export default Channel