import React from 'react';

const styles = {
  footer: {
    height: '30px',
    backgroundColor: 'rgba(255,255,255,.3)',
    flexShrink: 0,
  }
}


class Footer extends React.Component{

    render(){
        return <footer className="App-footer" style={styles.footer}>
        footer
      </footer>
    }
  }

  export default Footer