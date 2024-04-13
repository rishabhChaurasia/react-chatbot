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
  let typingSpeed = 5;
  let responseArray = userQueryData?.split("**");

  const formattedText = responseArray
    ?.map((item, index) => {
      return index % 2 !== 1 ? item : `<b>${item}</b>`;
    })
    .join("");

  let finalResponseText = formattedText?.split("*").join("</br>");

  useEffect(() => {
    const simulateTyping = async () => {
      for (let i = 0; i < finalResponseText?.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, typingSpeed));
        setTypingEffect(finalResponseText?.substring(0, i + 1));
      }
    };
    simulateTyping();
  }, [finalResponseText, typingSpeed]);

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
