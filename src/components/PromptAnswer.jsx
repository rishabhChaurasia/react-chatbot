import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";

function PromptAnswer({ userQueryData, recentUserQuery }) {
  const { themeMode } = useSelector((state) => state.theme);
  const { authUser } = useSelector((state) => state.auth);

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

      {userQueryData && (
        <div
          className="promptContent"
          // style={{
          //   backgroundColor: themeMode === "dark" ? "#38393f" : "#f0f4f9",
          // }}
        >
          <img
            src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
            alt=""
          />
          <p>{userQueryData}</p>
        </div>
      )}
    </div>
  );
}

export default PromptAnswer;
