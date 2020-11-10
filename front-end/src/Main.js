import React from "react";
import Channel from "./Channel";
import Channels from "./Channels";

import { useState } from "react";
import "./App.css";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const styles = {
  main: {
    color: "black",
    backgroundColor: "rgba(180,180,180)",
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
  },
};

class Main extends React.Component {
  render() {
    return (
      <main className="App-main" css={styles.main}>
        <Channels />
        <Channel />
      </main>
    );
  }
}

export default Main;
