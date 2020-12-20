import axios from "axios";
import Context from "./Context";
import { useContext } from "react";
import TextField from "@material-ui/core/TextField";
/** @jsx jsx */
import { jsx } from "@emotion/core";
// Layout
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import InfoIcon from "@material-ui/icons/Info";
import IconButton from "@material-ui/core/IconButton";
import icon1 from "./icons/icon1.jpg";
import icon2 from "./icons/icon2.jpg";
import icon3 from "./icons/icon3.jpg";
import icon4 from "./icons/icon4.jpg";
import icon5 from "./icons/icon5.jpg";
import icon6 from "./icons/icon6.jpg";
import icon7 from "./icons/icon7.jpg";
import icon8 from "./icons/icon8.jpg";
import icon9 from "./icons/icon9.jpg";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { useHistory } from "react-router-dom";

const useStyles = (theme) => ({
  root: {
    flexGrow: "1",
  },
  container: {
    display: "grid",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  form: {
    width: "95%",
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    marginRight: "20px",
    //backgroundColor: '#808080',
  },
  tampon: {
    width: "40%",
  },
  firstPartForm: {
    float: "left",
    //backgroundColor: '#c0c0c0',
    width: "100%",
  },
  element: {
    marginBottom: "20px",
  },
  gravatarPartForm: {
    float: "center",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: 400,
    height: 200,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
});

export default () => {
  const styles = useStyles(useTheme());
  const { oauth } = useContext(Context);
  const history = useHistory();
  const updateUser = async () => {
    var user_name = document.getElementById("outlined-textarea username").value;
    var user_bio = document.getElementById("outlined-textarea bio").value;
    var id_photo = document.getElementById("outlined-textarea id_photo").value;
    const { data: users } = await axios.put(
      `http://localhost:3001/users/${oauth.email}`,
      {
        username: user_name,
        email: oauth.email,
        bio: user_bio,
        avatar: id_photo,
      }
    );
    history.push("/");
  };
  const tileData = [
    {
      img: icon1,
      title: "1",
    },
    {
      img: icon2,
      title: "2",
    },
    {
      img: icon3,
      title: "3",
    },
    {
      img: icon4,
      title: "4",
    },
    {
      img: icon5,
      title: "5",
    },
    {
      img: icon6,
      title: "6",
    },
    {
      img: icon7,
      title: "7",
    },
    {
      img: icon8,
      title: "8",
    },
    {
      img: icon9,
      title: "9",
    },
  ];

  return (
    <div css={styles.root}>
      <Grid container css={styles.container} spacing={5}>
        <Grid item xs={12}>
          <Paper css={styles.paper}>My Settings</Paper>
        </Grid>
      </Grid>
      <form>
        <div>
          <div css={styles.form}>
            <div css={styles.tampon}>
              <div css={styles.firstPartForm}>
                <div css={styles.element}>
                  <TextField
                    name="Username"
                    id="outlined-textarea username"
                    label="Username"
                    placeholder=""
                    multiline
                    variant="outlined"
                    required
                  />
                </div>
                <div css={styles.element}>
                  <TextField
                    name="bio"
                    id="outlined-textarea bio"
                    label="Bio"
                    placeholder=""
                    multiline
                    variant="outlined"
                    required
                  />
                </div>
              </div>
            </div>
            <div css={styles.gravatarPartForm}>
              <h4 css={styles.element}>
                {" "}
                Choose your Avatar among our own Selection (if none is good for
                you, enter 0):{" "}
              </h4>
              <div css={styles.element}>
                <TextField
                  name="id_photo"
                  id="outlined-textarea id_photo"
                  className="E"
                  label="Photo's id"
                  placeholder=""
                  multiline
                  variant="outlined"
                />
              </div>
              <GridList css={styles.gridList}>
                {tileData.map((tile) => (
                  <GridListTile key={tile.img}>
                    <img src={tile.img} alt={tile.title} />
                    <GridListTileBar
                      title={tile.title}
                      actionIcon={
                        <IconButton
                          aria-label={`info about ${tile.title}`}
                          css={styles.icon}
                        >
                          <InfoIcon />
                        </IconButton>
                      }
                    />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </div>
          <Grid container css={styles.container} spacing={5}>
            <Grid item xs>
              {" "}
            </Grid>
            <Grid item xs={6}>
              <Paper css={styles.paper}>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<SaveIcon />}
                  onClick={updateUser}
                  size="large"
                >
                  UPDATE
                </Button>
              </Paper>
            </Grid>
            <Grid item xs></Grid>
          </Grid>
        </div>
      </form>
    </div>
  );
};
