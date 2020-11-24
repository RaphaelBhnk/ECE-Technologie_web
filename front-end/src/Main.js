import {useState} from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Local
import Channels from './Channels'
import Channel from './Channel'
import Welcome from './Welcome'
import { useMediaPredicate } from "react-media-hook";
import React from 'react';

const styles = {
  main: {
    backgroundColor: '#373B44',
    overflow: 'hidden',
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'row',
  },
  mainS: {
    backgroundColor: '#373B44',
    overflow: 'hidden',
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
  },
}

export default () => {
  const smallerThan400 = useMediaPredicate("(max-width: 400px)");
  const biggerThan400 = useMediaPredicate("(min-width: 401px)");
  const [channel, setChannel] = useState(null)
  const fetchChannel = async (channel) => {
    setChannel(channel)
  }
  
  return (<React.Fragment>
    {biggerThan400 && <main css={styles.main}>
      <Channels onChannel={fetchChannel} sizeScreen={"biggerThan400"}/>
      {channel ? <Channel channel={channel} messages={[]} /> : <Welcome />}
    </main>}
    {smallerThan400 && <main css={styles.mainS}>
      <Channels onChannel={fetchChannel} sizeScreen={"biggerThan400"}/>
      {channel ? <Channel channel={channel} messages={[]} /> : <Welcome />}
    </main>}
    </React.Fragment>
  );
}
