import {useContext, useEffect} from 'react';
import axios from 'axios';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
// Local
import Context from './Context'
import {useHistory} from 'react-router-dom'

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

}

export default () => {
  const {
    oauth,
    channels, setChannels
  } = useContext(Context)
  const createChannel = async () => {
    var nameChannel=prompt("Please enter the name of the channel:")
    const {data: channels} = await axios.post(
      `http://localhost:3001/channels`
    , {
      name: nameChannel,
      propriétaire: oauth.email,
      membres:[]
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
            channel.propriétaire===oauth.email ? <center><button css={styles.bou}>{channel.name}</button> </center>   
             : channel.membres.indexOf(oauth.email)!==-1 ? (<center><button css={styles.bou}>{channel.name}</button> </center>)
             :<center></center>
             } 
          </Link>
        </li>
      ))}
    <center><Button variant="contained" color="primary" disableElevation  onClick={createChannel}>
    Add channel
  </Button>
  </center>
    </ul>

  );
}
