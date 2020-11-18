import {} from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import { useTheme } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

const useStyles = (theme) => ({
  root: {
    flex: '1 1 auto',
    background: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& > div': {
      margin: `${theme.spacing(1)}`,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '& fieldset': {
      border: 'none',
      '& label': {
        marginBottom: theme.spacing(.5),
        display: 'block',
      },
    },
  },
})

export default ({
  onUser
}) => {
  const styles = useStyles(useTheme())
  return (
    <div css={styles.root}>
      <div>
        <fieldset>
          <TextField color="primary" id="outlined-size-normal" label="Username" variant="filled" />
        </fieldset>
        <fieldset>
          <TextField color="primary" id="outlined-size-normal" label="Password" type="password" variant="filled" />
        </fieldset>
        <fieldset>
          <Button variant="outlined" color="primary" type="submit" value="Connexion" onClick={ (e) => {
            e.stopPropagation()
            onUser({username: 'david'})
          }} > 
            Connexion 
          </Button>  
        </fieldset>
      </div>
    </div>
  );
}
