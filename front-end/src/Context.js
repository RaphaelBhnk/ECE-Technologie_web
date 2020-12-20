import React, {useState} from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios';

const Context = React.createContext()

export default Context

export const Provider = ({
  children
}) => {
  const [cookies, setCookie, removeCookie] = useCookies([])
  const [oauth, setOauth] = useState(cookies.oauth)
  const [drawerVisible, setDrawerVisible] = useState(false)
  const [channels, setChannels] = useState([])
  const [currentChannel, setCurrentChannel] = useState(null)
  const [allUsers, setallUsers] = useState()
  const [tet, settet] = useState(1)
  const [currentUser,setCurrentCUser]=useState(1)
  const test = async()=>{
    try {
      const {data: users} = await axios.get('http://localhost:3001/users')
      setallUsers(users)
    } catch (error) {    
    }
    }
    const [teta, setteta] = useState(test)
  return (
    <Context.Provider value={{
      oauth: oauth,
      setOauth: (oauth) => {
        if(oauth){
          const payload = JSON.parse(
            Buffer.from(
              oauth.id_token.split('.')[1], 'base64'
            ).toString('utf-8')
          )
          oauth.email = payload.email
          setCookie('oauth', oauth)
        }else{
          setCurrentChannel(null)
          setChannels([])
          removeCookie('oauth')
        }
        setOauth(oauth)
      },
      currentUser:currentUser,
      setCurrentCUser:setCurrentCUser,
      tet:tet,
      settet:settet,
      allUsers:allUsers,
      setallUsers:setallUsers,
      channels: channels,
      drawerVisible: drawerVisible,
      setDrawerVisible: setDrawerVisible,
      setChannels: setChannels,
      currentChannel: currentChannel,
      setCurrentChannel: (channelId) => {
        const channel = channels.find( channel => channel.id === channelId)
        setCurrentChannel(channel)
      },
    }}>{children}</Context.Provider>
  )
}