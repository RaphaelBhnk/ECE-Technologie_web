import React from 'react';
import Channel from './Channel'
import Channels from './Channels'

const styles = {
    main: {
      backgroundColor: '#373B44',
      flex: '1 1 auto',
      display: 'flex',
      flexDirection: 'row',
      overflow: 'hidden',
    } 
}

class Main extends React.Component{
  
    constructor (props) {
      super(props)
    }
  
    render(){
        return <main className="App-main" css={styles.main}>
        <Channels />
        <Channel messages = {messages} />
      </main>
    }
  }

  export default Main