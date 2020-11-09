import React from 'react';

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
    }}

class Header extends React.Component{

    render(){
        return <header className="App-header" css={styles.header}>
        <h1>Header</h1>
      </header>
    }
  }

  export default Header