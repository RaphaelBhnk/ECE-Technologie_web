import React from 'react';
import axios from 'axios';
import Context from './Context';
import { useContext } from 'react'
import TextField from '@material-ui/core/TextField';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import iconAlyssa from './icons/iconAlyssa.jpg';
import iconAubrey from './icons/iconAubrey.jpg';
import iconCarter from './icons/iconCarter.jpg';
import iconCharlie from './icons/iconCharlie.jpg';
import iconCole from './icons/iconCole.jpg';
import iconColin from './icons/iconColin.jpg';
import iconRaphael from './icons/iconRaphael.jpg';
import iconReagan from './icons/iconReagan.jpg';
import iconZachary from './icons/iconZachary.jpg';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { useHistory } from "react-router-dom";

const useStyles = (theme) => ({
  root: {
    flexGrow: '1',
  },
  container: {
    display: 'grid',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  form: {
    width: '95%',
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    marginRight: '20px',
    //backgroundColor: '#808080',
  },
  tampon: {
    width: '40%',
  },
  firstPartForm: {
    float: 'left',
    //backgroundColor: '#c0c0c0',
    width: '100%',
  },
  element: {
    marginBottom: '20px',
  },
  gravatarFormPart: {
    float: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: 400,
    height: 200,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
})

export default () => {
  const styles = useStyles(useTheme())
  const {
    oauth
  } = useContext(Context)
  const [state, setState] = React.useState({
    checkedA: true,
  })
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  }
  const history = useHistory();
  const createUser = async() => {
    var user_name= document.getElementById("outlined-textarea username").value
    var e_mail= document.getElementById("outlined-textarea email").value
    var user_bio= document.getElementById("outlined-textarea bio").value
    var user_theme_registered= document.getElementById("switch mode").value
    var id_photo= document.getElementById("outlined-textarea id_photo").value
    const {data: users} = await axios.post (
      `http://localhost:3001/users`
      ,{
        username: user_name,
        email: e_mail,
        bio: user_bio,
        theme_value: user_theme_registered,
        avatar: id_photo
      })
      history.push('/channels')
  }
  const tileData = [
    {
      img: iconAlyssa,
      title: '1',
    },
    {
      img: iconAubrey,
      title: '2',
    },
    {
      img: iconCarter,
      title: '3',
    },
    {
      img: iconCharlie,
      title: '4',
    },
    {
      img: iconCole,
      title: '5',
    },
    {
      img: iconColin,
      title: '6',
    },
    {
      img: iconRaphael,
      title: '7',
    },
    {
      img: iconReagan,
      title: '8',
    },
    {
      img: iconZachary,
      title: '9',
    }
  ]

  return (
    <div css={styles.root}>
      <Grid container css={styles.container} spacing={5} >
        <Grid item xs={12} >
          <Paper css={styles.paper}>New User Registration</Paper>
        </Grid>
      </Grid>
      <form>
        <div>
          <div css={styles.form}>
            <div css={styles.tampon}>
              <div css={styles.firstPartForm}>
                <div css={styles.element}>
                  <TextField  name="Username" id="outlined-textarea username" label="Username" placeholder="" multiline variant="outlined" />
                </div>
                <div css={styles.element}>
                  <TextField   name="email" id="outlined-textarea email" label="Email" placeholder={oauth.email} multiline variant="outlined" />
                </div>
                <div css={styles.element}>
                  <TextField  name="bio" id="outlined-textarea bio" label="Bio" placeholder="" multiline variant="outlined" />
                </div>
                <div css={styles.element}>
                  <FormControlLabel control={ <Switch checked={state.checkedA} onChange={handleChange} name="checkedA" color="primary" id="switch mode"/> } label="Dark Thme"/>
                </div>
              </div>
            </div>
            <div css={styles.gravatarFormPart}>
              <h4 css={styles.element}> Choose your Avatar among our own Selection : </h4>
              <div css={styles.element}>
                  <TextField  name="id_photo" id="outlined-textarea id_photo" className="E" label="Photo's id" placeholder="" multiline variant="outlined" />
              </div>
              <GridList css={styles.gridList}>
                {tileData.map((tile) => (
                  <GridListTile key={tile.img}>
                    <img src={tile.img} alt={tile.title} />
                    <GridListTileBar
                      title={tile.title}
                      actionIcon={
                        <IconButton aria-label={`info about ${tile.title}`} css={styles.icon}>
                          <InfoIcon />
                        </IconButton>
                      }
                    />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </div>
          <Grid container css={styles.container} spacing={5} >
            <Grid item xs > </Grid>
              <Grid item xs={6} >
                <Paper css={styles.paper}>
                  <Button variant="outlined" color="primary"  startIcon={<SaveIcon />} onClick={createUser} size="large">
                    SAVE
                  </Button>
                </Paper>
              </Grid>
            <Grid item xs ></Grid>
          </Grid>
        </div>
      </form>
    </div>
  )
}