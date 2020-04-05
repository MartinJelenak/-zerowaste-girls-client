import React from "react";
import "./App.css";
import PropTypes from "prop-types";

interface AppProps {
  children: PropTypes.ReactNodeLike;
}

export default function App(props: AppProps) {
  return <>{props.children}</>;
}
