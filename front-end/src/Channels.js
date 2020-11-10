import React from "react";

import { useState } from "react";
import "./App.css";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const styles = {
  channels: {
    border: "2px solid black",
    height: "100%",
    backgroundColor: "rgba(140,140,140)",
    minWidth: "200px",
  },
};

class Channels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texte: "",
    };
  }

  render() {
    return (
      <div css={styles.channels}>
        <h1>Discussions</h1>
        <p>En Travaux ! </p>
      </div>
    );
  }
}

export default Channels;
