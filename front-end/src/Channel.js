import React from 'react';
import {useRef, useState} from 'react';
import axios from 'axios';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import { useTheme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// Local
import Form from './channel/Form'
import List from './channel/List'
import { useMediaPredicate } from "react-media-hook";

const useStyles = (theme) => ({
  root: {
    height: '100%',
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    background: 'rgba(0,0,0,.2)',
    position: 'relative',
  },
  rootL: {
    height: '100%',
 //   flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    background: 'rgba(0,0,0,.2)',
    position: 'relative',
  },
  fab: {
    position: 'absolute !important',
    // position: 'fixed !important',
    top: theme.spacing(2),
    // width: '50px',
    // bottom: '0',
    // marginLeft: '100%',
    // bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabDisabled: {
    display: 'none !important',
  }
})

export default ({
  channel
}) => {

  const styles = useStyles(useTheme())
  const listRef = useRef();
  const channelId = useRef()
  const [messages, setMessages] = useState([])
  const [scrollDown, setScrollDown] = useState(false)
  const addMessage = (message) => {
    fetchMessages()
  }
  const fetchMessages = async () => {
    setMessages([])
    const {data: messages} = await axios.get(`http://localhost:3001/channels/${channel.id}/messages`)
    setMessages(messages)
    if(listRef.current){
      listRef.current.scroll()
    }
  }
  
  if(channelId.current !== channel.id){
    fetchMessages()
    channelId.current = channel.id
  }
  const onScrollDown = (scrollDown) => {
    setScrollDown(scrollDown)
  }
  const onClickScroll = () => {
    listRef.current.scroll()
  }
  const smallerThan400 = useMediaPredicate("(max-width: 400px)");
  const biggerThan400 = useMediaPredicate("(min-width: 401px)");
  return (<React.Fragment>
    {biggerThan400 && <div css={styles.rootL}>
      <List
        channel={channel}
        messages={messages}
        onScrollDown={onScrollDown}
        ref={listRef}
      />
      <Form addMessage={addMessage} channel={channel} />
      <Fab
        color="primary"
        aria-label="Latest messages"
        css={[styles.fab, scrollDown || styles.fabDisabled]}
        onClick={onClickScroll}
      >
        <ArrowDropDownIcon />
      </Fab>
    </div>}
    {smallerThan400 && <div css={styles.root}>
      <List
        channel={channel}
        messages={messages}
        onScrollDown={onScrollDown}
        ref={listRef}
      />
      <Form addMessage={addMessage} channel={channel} />
      <Fab
        color="primary"
        aria-label="Latest messages"
        css={[styles.fab, scrollDown || styles.fabDisabled]}
        onClick={onClickScroll}
      >
        <ArrowDropDownIcon />
      </Fab>
    </div>}
    </React.Fragment>
  );
}
