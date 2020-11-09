import React from 'react';

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