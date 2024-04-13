import React, { useEffect } from "react";
import Header from "./Header";
import Starter from "./Starter";
import PromptInput from "./PromptInput";
import PromptAnswer from "./PromptAnswer";
import useGemini from "../customHooks/useGemini";

function MainPage({ getPrevUserQuery, recentPrompt, setRecentPrompt }) {
  const {
    userQueryData,
    geminiQuery,
    recentUserQuery,
    userQueryDataLoading,
    prevUserQuery,
  } = useGemini();

  useEffect(() => {
    const getRecentPrompt = async () => {
      await geminiQuery(recentPrompt);
      setRecentPrompt("");
    };

    if (recentPrompt) {
      getRecentPrompt();
    }
  }, [recentPrompt]);

  const handleSearchQuery = async (userQuery) => {
    await geminiQuery(userQuery);
    getPrevUserQuery(prevUserQuery);
  };

  return (
    <div className="mainPage">
      <Header />
      {!recentUserQuery && <Starter />}
      {recentUserQuery && (
        <PromptAnswer
          userQueryData={userQueryData}
          recentUserQuery={recentUserQuery}
          userQueryDataLoading={userQueryDataLoading}
        />
      )}
      <PromptInput handleSearchQuery={handleSearchQuery} />
    </div>
  );
}

export default MainPage;
