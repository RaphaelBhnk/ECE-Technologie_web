import {forwardRef,useEffect, useImperativeHandle, useLayoutEffect, useRef,useContext} from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import '../App.css';
import Context from '../Context'
import Button from '@material-ui/core/Button'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import Edit from './Edit'
//Menu
import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// Layout
import { useTheme } from '@material-ui/core/styles';
//Icon
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
// Markdown
import unified from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import html from 'rehype-stringify'
// Time
import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import updateLocale from 'dayjs/plugin/updateLocale'
dayjs.extend(calendar)
dayjs.extend(updateLocale)
dayjs.updateLocale('en', {
  calendar: {
    sameElse: 'DD/MM/YYYY hh:mm A'
  }
})


const useStyles = (theme) => ({
  root: {
    position: 'relative',
    flex: '1 1 auto',
    'pre': {
      
      overflowY: 'auto',
    },
    '& ul': {
      'margin': 0,
      'padding': 0,
      'textIndent': 0,
      'listStyleType': 0,
    },
  },
  message: {
    padding: '.2rem .5rem',
    ':hover': {
      backgroundColor: 'rgba(255,255,255,.05)',
    },
  },
  myMessage: {
    textAlign: 'right',
  },
  fabWrapper: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '50px',
  },
  fab: {
    position: 'fixed !important',
    top: 0,
    width: '50px',
  },
  left:{
    float:'left',
    margin:'50'
  },
  corner:{
    float:'right',
  },
  big:{
    margin:'20px',
    transform: 'scale(2)'
  }

})

export default forwardRef(({
  channel,
  messages,
  onScrollDown,
}, ref) => {
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();

  const styles = useStyles(useTheme())
  // Expose the scroll action
  useImperativeHandle(ref, () => ({
    scroll: scroll
  }));
  const {
    oauth,
     setChannels,
     currentUser,
     channels
  } = useContext(Context)
  const rootEl = useRef(null)
  const scrollEl = useRef(null)
  const history = useHistory()

 const rename = async()=>{
    var t= channel
    var renameChannel=document.getElementById("filled-basic rename").value
    if(renameChannel!==null){t.name=renameChannel}
    try {
      
      const {data: channels} = await axios.put(
        `//localhost:3001/channels/${t.id}`
      , {
        name:t.name,
        owner:t.owner,
        members:t.members,
        administrators:t.administrators
      })
      handleClose()
      history.push(`/channels/${t.id}`)
      
    } catch (error) {
    }
  }
  const addMember = async()=>{
    var t= channel
    var newMember=document.getElementById("filled-basic rename").value
    if(newMember!==null){t.members.push(newMember)}
    try {
      
      const {data: channels} = await axios.put(
        `//localhost:3001/channels/${t.id}`
      , {
        name:t.name,
        owner:t.owner,
        members:t.members,
        administrators:t.administrators
      })
      handleClose()
      history.push(`/channels/${t.id}`)
      
    } catch (error) {
    }
  }
  const makeAdmin = async()=>{
    var t= channel
    console.log(t.administrators)
    var k=prompt("Add the email of the new member:","")
    if(k!==null){t.administrators.push(k)}
    try {
      
      const {data: channels} = await axios.put(
        `//localhost:3001/channels/${t.id}`
      , {
        name:t.name,
        owner:t.owner,
        members:t.members,
        administrators:t.administrators
      })
      handleClose()
      history.push(`/channels/${t.id}`)
      
    } catch (error) {
    }
  }
  const deleteChannel = async()=>{
    var t= channel
    try {
      
      const {data: channels} = await axios.delete(
        `//localhost:3001/channels/${t.id}`,
        t.id
      )
      handleClose()
      history.push(`/channels/`)
      
    } catch (error) {
    }
  }
  const scroll = () => {
    scrollEl.current.scrollIntoView()
  }
  // See https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj
  const throttleTimeout = useRef(null) // react-hooks/exhaustive-deps
  useLayoutEffect( () => {
    const rootNode = rootEl.current // react-hooks/exhaustive-deps
    const handleScroll = () => {
      if (throttleTimeout.current === null) {
        throttleTimeout.current = setTimeout(() => {
          throttleTimeout.current = null
          const {scrollTop, offsetHeight, scrollHeight} = rootNode // react-hooks/exhaustive-deps
          onScrollDown(scrollTop + offsetHeight < scrollHeight)
        }, 200)
      }
    }
    handleScroll()
    rootNode.addEventListener('scroll', handleScroll)
    return () => rootNode.removeEventListener('scroll', handleScroll)
  })

  return (
    <div css={styles.root} ref={rootEl}>
      <div>
      <h1 css={styles.left}>Messages for {channel.name}</h1>
      {channel.owner===oauth.email ? <span css={styles.corner}><Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
    <MoreHorizOutlinedIcon css={styles.big}></MoreHorizOutlinedIcon>
  </Button>
        <Menu
    id="simple-menu"
    anchorEl={anchorEl}
    keepMounted
    open={Boolean(anchorEl)}
    onClose={handleClose}
  >
    <a class="effectless"  href="#popupRename"><MenuItem>Rename channel</MenuItem></a>
    <a class="effectless" href="#popupAdd"><MenuItem>Add member</MenuItem></a>
    <a class="effectless" href="#popupDel"><MenuItem>Delete this channel</MenuItem></a>
    <a class="effectless" href="#popupAdmin"><MenuItem>Make someone administrator</MenuItem></a>
  </Menu></span>
  
    //    <Button variant="contained" color="primary" onClick={addMember} >
    //   Rename channel
    // </Button>
     : channel.administrators.indexOf(oauth.email)!==-1 ? <span css={styles.corner}><Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
     <MoreHorizOutlinedIcon css={styles.big}></MoreHorizOutlinedIcon>
   </Button>
         <Menu
     id="simple-menu"
     anchorEl={anchorEl}
     keepMounted
     open={Boolean(anchorEl)}
     onClose={handleClose}
   >
    <a class="effectless" href="#popupAdd"><MenuItem>Add member</MenuItem></a>
    <a class="effectless" href="#popupAdmin"><MenuItem>Make someone administrator</MenuItem></a>
   </Menu></span>
     : <p></p>
      }
     </div>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
      <ul>
        { messages.map( (message, i) => {
            const {contents: content} = unified()
            .use(markdown)
            .use(remark2rehype)
            .use(html)
            .processSync(message.content)
            return (
              <li key={i} css={styles.message}>
                {message.author ===  oauth.email ?<p css={styles.myMessage}>
                
                    <span>{currentUser.username}</span>
                    {' - '}
                    <span>{dayjs().calendar(message.creation)}</span>
                    
                  </p> 
                  : <p>
                  <span>{message.author}</span>
                  {' - '}
                  <span>{dayjs().calendar(message.creation)}</span>
                </p>}

                {message.author ===  oauth.email ? <div><div><Edit messageCreation={message.creation} channel={channel}/>
                <br></br>
                </div><div css={styles.myMessage} dangerouslySetInnerHTML={{__html: content}}></div>
                  </div>
                  : <div dangerouslySetInnerHTML={{__html: content}}>
                  </div>} 
              </li>
            )
        })}
      </ul>
      <div ref={scrollEl} />
      <div id="popupRename" class="overlay">
             <div class="popup">
               <h2>Rename your channel:</h2>
               <a class="close" href="#">&times;</a>
               <div class="content">
               <form className={classes.root} noValidate autoComplete="off">
               <TextField id="filled-basic rename" label="Channel name" variant="filled" />
               <div className={classes.root}>
               <Button onClick={rename} href="#">RENAME</Button>
                </div>
                </form>
               </div>
             </div>
           </div>
           <div id="popupAdd" class="overlay">
             <div class="popup">
               <h2>Add a new member:</h2>
               <a class="close" href="#">&times;</a>
               <div class="content">
               <form className={classes.root} noValidate autoComplete="off">
               <TextField id="filled-basic add" label="Member name" variant="filled" />
               <div className={classes.root}>
               <Button onClick={addMember} href="#">ADD</Button>
                </div>
                </form>
               </div>
             </div>
           </div>
           <div id="popupDel" class="overlay">
             <div class="popup">
               <h2>You really want to delete this channel ?</h2>
               <a class="close" href="#">&times;</a>
               <div class="content">
               <form className={classes.root} noValidate autoComplete="off">
               <div className={classes.root}>
               <Button onClick={deleteChannel} href="#">DELETE</Button>
                </div>
                </form>
               </div>
             </div>
           </div>
           <div id="popupAdmin" class="overlay">
             <div class="popup">
               <h2>Make someone administrator:</h2>
               <a class="close" href="#">&times;</a>
               <div class="content">
               <form className={classes.root} noValidate autoComplete="off">
               <TextField id="filled-basic add" label="Administrator name" variant="filled" />
               <div className={classes.root}>
               <Button onClick={makeAdmin} href="#">ADD</Button>
                </div>
                </form>
               </div>
             </div>
           </div>
    </div>
  )
})