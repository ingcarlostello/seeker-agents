// @React
import React, { useContext } from "react";

// @Components
import Header from "./components/Header";

// @Context
import { AgentsContext } from "./context/AgentsContext";

// @Pages
import AgentList from "./pages/AgentList";
import AgentSeeker from "./pages/AgentSeeker";

function App() {
  
  const { agentSeekerPage }:any = useContext(AgentsContext);

  return (
    <>
      <Header />
      {agentSeekerPage ? <AgentSeeker /> : <AgentList />}
    </>
  );
}

export default App;
