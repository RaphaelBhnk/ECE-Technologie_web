import {useContext, useEffect} from 'react';
import axios from 'axios';
import './App.css';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
// Local
import Context from './Context'
import {useHistory} from 'react-router-dom'
import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//Menu
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
  
  // root: {
  //   minWidth: '200px',
  // },

  channel: {
    padding: '.2rem .5rem',
    whiteSpace: 'nowrap', 
  },
  bou:{
    width:'100%',
    height:'30px',
    border: '4px double #cccccc',
    borderRadius: '10px',
    fontSize: '15px',
    backgroundColor:'#D3816E',
    color:'white',
    ':hover': {
      backgroundColor: 'rgba(255,255,255,.05)',
    },
    transition: '0.5s'
  },
  min:{
    width: '170px',
    height:'50px',
  },
  baisse:{
    padding:'10px'
  }

}

export default () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();
  const {
    oauth,
    channels, setChannels
  } = useContext(Context)
  const createChannel = async () => {
    var nameChannel=document.getElementById("filled-basic create").value
    const {data: channels} = await axios.post(
      `http://localhost:3001/channels`
    , {
      name: nameChannel,
      owner: oauth.email,
      members:[]
    })
    window.location.reload("http://localhost:3000/channels");
  }

  const history = useHistory();
  useEffect( () => {
    const fetch = async () => {
      try{
        const {data: channels} = await axios.get('http://localhost:3001/channels', {
          headers: {
            'Authorization': `Bearer ${oauth.access_token}`
          }
        })

        setChannels(channels)
      }catch(err){
        console.error(err)
      }
    }
    fetch()
  }, [oauth, setChannels])
  return (
    <ul style={styles.root}>
<center style={styles.baisse}>       
                 <a class="effectless"  href="#popupCreate"><Button variant="contained" color="primary" disableElevation>
                     Add channel
                   </Button></a>
                   </center>
             <div id="popupCreate" class="overlay">
             <div class="popup">
               <h2>Create your channel:</h2>
               <a class="close" href="#">&times;</a>
               <div class="content">
               <form className={classes.root} noValidate autoComplete="off">
               <TextField id="filled-basic create" label="Channel name" variant="filled" />
               <div className={classes.root}>
               <Button onClick={createChannel} href="#">CREATE</Button>
                </div>
                </form>
               </div>
             </div>
           </div>
  <div className={classes.root}>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="text"
      >
      { channels.map( (channel, i) => (
        <li key={i} css={styles.channel}>
          <Link
            href={`/channels/${channel.id}`}
            onClick={ (e) => {
              e.preventDefault()
              history.push(`/channels/${channel.id}`)
            }}
          >
          {
            channel.owner===oauth.email ? <center>
            <Button css={styles.min}>{channel.name}</Button>
            </center>
             : channel.members.indexOf(oauth.email)!==-1 ? <center>
             <Button css={styles.min}>{channel.name}</Button>
             </center>
             :<center></center>
             } 
          </Link>
        </li>
      ))}
  </ButtonGroup> 
      </div>
    </ul>



  );
}