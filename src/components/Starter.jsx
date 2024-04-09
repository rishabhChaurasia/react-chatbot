import React from "react";
import { useSelector } from "react-redux";
import { Box, Grow, Button, Snackbar } from "@mui/material";
import StarterCard from "./StarterCard";

function Starter() {
  const { authUser } = useSelector((state) => state.auth);
  const { themeMode } = useSelector((state) => state.theme);

  return (
    <div
      style={{
        width: "100%",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5rem",
          paddingTop: "1rem",
        }}
      >
        <Box>
          <Grow in={true} timeout={1000} style={{ transformOrigin: "0 0 0" }}>
            <h1
              style={{
                fontSize: "3.5rem",
                fontWeight: 500,
                color: "#607ee6",
                letterSpacing: "-1px",
              }}
            >
              Hello,{" "}
              <span className="text-gradient">{authUser?.displayName}</span>
            </h1>
          </Grow>
          <Grow in={true} timeout={3000} style={{ transformOrigin: "0 0 0" }}>
            <h1
              style={{
                fontSize: "3.5rem",
                fontWeight: 500,
                letterSpacing: "-1px",
                transform: "translateY(-0.7rem)",
                color: themeMode === "dark" ? "#717278" : "#c4c7c5",
              }}
            >
              How can I help you today?
            </h1>
          </Grow>
        </Box>

        <StarterCard />
      </div>
    </div>
  );
}

export default Starter;
