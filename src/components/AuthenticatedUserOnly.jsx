import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MainPage from "./MainPage";

function AuthenticatedUserOnly() {
  const [prevUserQuery, setPrevUserQuery] = useState(null);
  const [recentPrompt, setRecentPrompt] = useState("");
  const getPrevUserQuery = (query) => {
    setPrevUserQuery(query);
  };

  const getRecentPrompt = (query) => {
    setRecentPrompt(query);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        prevUserQuery={prevUserQuery}
        getRecentPrompt={getRecentPrompt}
      />
      <MainPage
        getPrevUserQuery={getPrevUserQuery}
        recentPrompt={recentPrompt}
        setRecentPrompt={setRecentPrompt}
      />
    </div>
  );
}

export default AuthenticatedUserOnly;
