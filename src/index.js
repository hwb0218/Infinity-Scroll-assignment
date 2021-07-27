import React from "react";
import ReactDOM from "react-dom";
import CardList from "./CardList";
import GlobalStyle from "./style/GlobalStyle";

ReactDOM.render(
  <>
    <GlobalStyle />
    <CardList />
  </>,
  document.getElementById("root")
);
