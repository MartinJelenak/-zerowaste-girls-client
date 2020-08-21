import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from "prop-types";

interface AppProps {
  children: PropTypes.ReactNodeLike;
}

export default function App(props: AppProps) {
  return (
    <>
      <CssBaseline />
      {props.children}
    </>
  );
}
