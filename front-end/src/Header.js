import Gravatar from 'react-gravatar'
import SettingsIcon from '@material-ui/icons/Settings';
import { useContext } from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import Context from './Context'
import Avatar from '@material-ui/core/Avatar';

import icon1 from './icons/icon1.jpg';
import icon2 from './icons/icon2.jpg';
import icon3 from './icons/icon3.jpg';
import icon4 from './icons/icon4.jpg';
import icon5 from './icons/icon5.jpg';
import icon6 from './icons/icon6.jpg';
import icon7 from './icons/icon7.jpg';
import icon8 from './icons/icon8.jpg';
import icon9 from './icons/icon9.jpg';


import {
  useHistory
} from "react-router-dom";

const useStyles = (theme) => ({
  header: {
    padding: theme.spacing(1),
    backgroundColor: 'rgba(255,255,255,.3)',
    flexShrink: 0,
  },
  headerLogIn: {
    backgroundColor: 'red',
  },
  headerLogOut: {
    backgroundColor: 'blue',
  },
  menu: {
    [theme.breakpoints.up('sm')]: {
      display: 'none !important',
    },
  },
  info_perso: {
    absolute: 'left',
    padding: '200px',
    marginRight:'2px',
  },
  out: {
    float: 'right',
  },
})

export default ({
  drawerToggleListener
}) => {
  const styles = useStyles(useTheme())
  const history = useHistory();
  const {
    oauth, setOauth,
    drawerVisible, setDrawerVisible, currentUser,
  } = useContext(Context)
  const drawerToggle = (e) => {
    setDrawerVisible(!drawerVisible)
  }
  const onClickLogout = (e) => {
    e.stopPropagation()
    setOauth(null)
  }
  const onClickGoToWelcome = (e) => {
    history.push('/channels')
  }
  return (
    <header css={styles.header}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={drawerToggle}
        css={styles.menu}
      >
        <MenuIcon />
      </IconButton>
      
      {
        oauth ?<span>
            {
              currentUser ? <span>
                {
                  currentUser.avatar==='0' ? <span css={styles.info_perso}>
                  <Gravatar email={oauth.email} size={35} default='identicon' />
                  {currentUser.username}
                  </span>

                  : <span>
                  {
                    currentUser.avatar==='1' ? <span css={styles.info_perso}>
                    <img src={icon1} height='30px' />
                    {currentUser.username}
                    {currentUser.bio}
                    </span>
  
                    : <span>
                    {
                      currentUser.avatar==='2' ? <span css={styles.info_perso}>
                      <img src={icon2} height='30px' />
                      {currentUser.username}
                      {currentUser.bio}
                      </span>
    
                      : <span>
                      {
                        currentUser.avatar==='3' ? <span css={styles.info_perso}>
                        <img src={icon3} height='30px' />
                        {currentUser.username}
                        {currentUser.bio}
                        </span>
      
                        : <span>
                        {
                          currentUser.avatar==='4' ? <span css={styles.info_perso}>
                          <img src={icon4} height='30px' />
                          {currentUser.username}
                          {currentUser.bio}
                          </span>
        
                          : <span>
                          {
                            currentUser.avatar==='5' ? <span css={styles.info_perso}>
                            <img src={icon5} height='30px' />
                            {currentUser.username}
                            {currentUser.bio}
                            </span>
          
                            : <span>
                            {
                              currentUser.avatar==='6' ? <span css={styles.info_perso}>
                              <img src={icon6} height='30px' />
                              {currentUser.username}
                              {currentUser.bio}
                              </span>
            
                              : <span>
                              {
                                currentUser.avatar==='7' ? <span css={styles.info_perso}>
                                <img src={icon7} height='30px' />
                                {currentUser.username}
                                {currentUser.bio}
                                </span>
              
                                : <span>
                                {
                                  currentUser.avatar==='8' ? <span css={styles.info_perso}>
                                  <img src={icon8} height='30px' />
                                  {currentUser.username}
                                  {currentUser.bio}
                                  </span>
                
                                  : <span>
                                  {
                                    currentUser.avatar==='9' ? <span css={styles.info_perso}>
                                    <img src={icon9} height='30px' />
                                    {currentUser.username}
                                    {currentUser.bio}
                                    </span>

                                    : <span css={styles.info_perso}>
                                    <Gravatar email={oauth.email} size={35} default='identicon' />
                                    {currentUser.email}
                                    {currentUser.bio}
                                    </span>
                                  } </span>
                                } </span>
                              } </span>
                            } </span>
                          } </span>
                        } </span>
                      } </span>
                    } </span>
                  } </span>
                } </span>
              : <span css={styles.info_perso}>
                  <Gravatar email={oauth.email} size={35} default='identicon' />
                  {oauth.email}
                </span>
            }
            <span css={styles.out}>
              <SettingsIcon onClick={onClickGoToWelcome} fontSize="large" color="primary"></SettingsIcon>
              <ExitToAppIcon onClick={onClickLogout} fontSize="large" color="primary">logout</ExitToAppIcon>
            </span >
          </span>
        :
          <span><center>Welcome !</center></span>
      }
      
    </header>
  );
}