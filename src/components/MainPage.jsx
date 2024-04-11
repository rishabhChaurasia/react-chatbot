import React from "react";
import Header from "./Header";
import Starter from "./Starter";
import PromptInput from "./PromptInput";
import PromptAnswer from "./PromptAnswer";
import useGemini from "../customHooks/useGemini";

function MainPage() {
  const { userQueryData, geminiQuery, recentUserQuery } = useGemini();

  const handleSearchQuery = async (userQuery) => {
    await geminiQuery(userQuery);
  };

  return (
    <div className="mainPage">
      <Header />
      {!recentUserQuery && <Starter />}
      {recentUserQuery && (
        <PromptAnswer
          userQueryData={userQueryData}
          recentUserQuery={recentUserQuery}
        />
      )}
      <PromptInput handleSearchQuery={handleSearchQuery} />
    </div>
  );
}

export default MainPage;
