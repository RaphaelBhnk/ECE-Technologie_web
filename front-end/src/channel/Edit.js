import { useState } from "react";
import Context from "./../Context";
import { useContext } from "react";
import axios from "axios";
/** @jsx jsx */
import { jsx } from "@emotion/core";
// Layout
import Button from "@material-ui/core/Button";
// import Icon from "@material-ui/core/Icon"
import TextField from "@material-ui/core/TextField";
import { useTheme } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import "../App.css";
import { useHistory } from "react-router-dom";

const useStyles = (theme) => ({
  button: {
    position: "absolute",
    right: "35px",
  },
});

export default ({ messageCreation, addMessage, channel }) => {
  const [content, setContent] = useState("");
  const styles = useStyles(useTheme());
  const { oauth } = useContext(Context);
  const history = useHistory();

  const classes = useStyles();

  const editMessage = async () => {
    console.log(messageCreation);
    const { data: message } = await axios.put(
      `http://localhost:3001/channels/${channel.id}/messages`,
      {
        content: document.getElementById("filled-basic edit").value,
        author: oauth.email,
        creation: messageCreation,
      }
    );
    history.push(`/channels/`);
  };
  const deleteMessage = async () => {
    const { data: message } = await axios.post(
      `http://localhost:3001/channels/${channel.id}/messages`,
      {
        content: content,
        author: oauth.email,
      }
    );
    addMessage(message);
    setContent("");
  };
  return (
    <div css={styles.button}>
      <a class="effectless" href="#popupEdit">
        <CreateIcon color="primary">Modifier</CreateIcon>
      </a>
      <a class="effectless" href="#popupDelete">
        {" "}
        <DeleteIcon color="secondary">Supprimer</DeleteIcon>
      </a>
      <div id="popupEdit" class="overlay">
        <div class="popup">
          <h2>Edit your content:</h2>
          <a class="close" href="#">
            &times;
          </a>
          <div class="content">
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="filled-basic edit"
                label="Content "
                variant="filled"
                required
              />
              <div className={classes.root}>
                <Button onClick={editMessage} href="#">
                  ADD
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="popupDelete" class="overlay">
        <div class="popup">
          <h2>Are you sure ?</h2>
          <a class="close" href="#">
            &times;
          </a>
          <div class="content">
            <form className={classes.root} noValidate autoComplete="off">
              <div className={classes.root}>
                <Button onClick={deleteMessage} href="#">
                  CONFIRM
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
