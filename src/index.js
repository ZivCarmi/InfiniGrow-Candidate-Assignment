import React from "react";
import ReactDOM from "react-dom";
import { ChannelsProvider } from "./context/ChannelsContext";
import App from "./App";
import "./Index.css";

ReactDOM.render(
  <React.StrictMode>
    <ChannelsProvider>
      <App />
    </ChannelsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
