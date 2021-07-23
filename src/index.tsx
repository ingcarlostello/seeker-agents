// @React
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// @Provider
import AgentsProvider from "./context/AgentsContext";

ReactDOM.render(
  <AgentsProvider>
    <App />
  </AgentsProvider>,
  document.getElementById("root")
);
