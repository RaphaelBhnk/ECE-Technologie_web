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
    drawerVisible, setDrawerVisible
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
        oauth ?
          <span>
            <span css={styles.info_perso}>
              <Gravatar email={oauth.email} size={35} default='identicon' />
              {oauth.email}
            </span>
            <span css={styles.out}>
              <SettingsIcon onClick={onClickGoToWelcome} fontSize="large" color="primary"></SettingsIcon>
              <ExitToAppIcon onClick={onClickLogout} fontSize="large" color="primary">logout</ExitToAppIcon>
            </span >
          </span>
        :
          <span>new user</span>
      }
      
    </header>
  );
}
