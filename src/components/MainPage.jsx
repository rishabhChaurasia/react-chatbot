import React from "react";
import Header from "./Header";
import Starter from "./Starter";
import PromptInput from "./PromptInput";
import PromptAnswer from "./PromptAnswer";

function MainPage() {
  
  return (
    <div className="mainPage">
      <Header />
      <Starter />
      {/* <PromptAnswer /> */}
      <PromptInput />
  
    </div>
  );
}

export default MainPage;
