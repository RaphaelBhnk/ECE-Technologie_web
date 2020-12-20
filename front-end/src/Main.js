import {useContext,useEffect} from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Drawer from '@material-ui/core/Drawer';
import axios from 'axios';

// Local
import Context from './Context'
import Channels from './Channels'
import Channel from './Channel'
import Welcome from './Welcome'
import Settings from './Settings'
import {
  Route,
  Switch,
} from 'react-router-dom'

const useStyles = (theme) => ({
  root: {
    backgroundColor: '#373B44',
    overflow: 'hidden',
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  drawer: {
    width: '200px',
    display: 'none',
  },
  drawerVisible: {
    display: 'block',
  },
  new:{
    height:'30px',
    float:'right'
  }
})

export default () => {
  const {
    currentChannel,
    oauth,
    drawerVisible,
    tet,
    settet,
    allUsers,
    setallUsers,
    setCurrentCUser,
    currentCUser
  } = useContext(Context)
  const theme = useTheme()
  const styles = useStyles(theme)
  const alwaysOpen = useMediaQuery(theme.breakpoints.up('sm'))
  const isDrawerVisible = alwaysOpen || drawerVisible
  //We decided to use the useEffect hook in order to create a currentUser, This way we will be able to call currentUser anywhere in the code
  useEffect( () => {
    const fetch = async () => {
      try{
        const {data: users} = await axios.get('http://localhost:3001/users')
        setallUsers(users)
        var a=0
        var i=0
        if(allUsers!==undefined)
        for(i=0;i<allUsers.length;i++)
        {
          if(allUsers[i].email===oauth.email)
          {
            a=1
            setCurrentCUser(allUsers[i])
          }
        }
        settet(a)
      }catch(err){
        console.error(err)
      }
    }
    fetch()
  }, [setallUsers,allUsers,settet,tet,oauth,setCurrentCUser,currentCUser])
  return (
    tet===0?<main>
    <Welcome/></main>
    :<main css={styles.root}>
      {
        <Drawer
        PaperProps={{ style: { position: 'relative' } }}
        BackdropProps={{ style: { position: 'relative' } }}
        ModalProps={{
          style: { position: 'relative' }
        }}
        variant="persistent"
        open={isDrawerVisible}
        css={[styles.drawer, isDrawerVisible && styles.drawerVisible]}
      >
        <Channels />
      </Drawer>}
      <Switch>
        <Route path="/channels/:id">
          <Channel />
        </Route>
        <Route path="/">      
         <Settings/>              
        </Route>
      </Switch>
    </main>
  );
}
