import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import GeminiIcon from "../assets/gemini_icon.png";
import ChatLoader from "./ChatLoader";

function PromptAnswer({
  userQueryData,
  recentUserQuery,
  userQueryDataLoading,
}) {
  const { authUser } = useSelector((state) => state.auth);
  const [typingEffect, setTypingEffect] = useState("");
  let typingSpeed = 6;
  let responseArray = userQueryData?.split("**");
  let formattedText;

  // for (let index = 0; index < responseArray?.length; index++) {
  //   if ( index % 2 !== 1) {
  //     formattedText += responseArray[index];
  //   } else {
  //     formattedText += `<b>${responseArray[index]}</b>`;
  //   }
  // }

  useEffect(() => {
    const simulateTyping = async () => {
      for (let i = 0; i < userQueryData?.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, typingSpeed));
        setTypingEffect(userQueryData?.substring(0, i + 1));
      }
    };
    simulateTyping();
  }, [userQueryData, typingSpeed]);

  return (
    <div className="promptAnswer">
      {recentUserQuery && (
        <div className="promptQuery">
          <Avatar
            src={authUser?.photoURL}
            sx={{ width: "35px", height: "35px" }}
          />
          <p>{recentUserQuery}</p>
        </div>
      )}

      <div className="promptContent">
        <img src={GeminiIcon} alt="" />
        {userQueryDataLoading ? (
          <ChatLoader />
        ) : (
          <p dangerouslySetInnerHTML={{ __html: typingEffect }}></p>
        )}
      </div>
    </div>
  );
}

export default PromptAnswer;
