import React from "react";

import { useState } from "react";
import "./App.css";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const styles = {
  header: {
    border: "2px solid black",
    height: "60px",
    backgroundColor: "rgba(180,180,180)",
    flexShrink: 0,
  },
  headerLogIn: {
    backgroundColor: "red",
  },
  headerLogOut: {
    backgroundColor: "blue",
  },
  title: {
    color: "black",
  },
};

class Header extends React.Component {
  render() {
    return (
      <header className="App-header" css={styles.header}>
        <h1 css={styles.title}>
          <center>Bienvenue sur l'application ! </center>
        </h1>
      </header>
    );
  }
}

export default Header;
