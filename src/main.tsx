import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Global, css } from "@emotion/react";

const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100vh;
    display: flex;
    font-family: "Red Hat Text", sans-serif;
    font-weight: 700;
    color: #8385a9;
    background: #1d1e28;
  }

  #root {
    width: 100%;
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <Global styles={globalStyles} />
    <App />
  </React.Fragment>
);
