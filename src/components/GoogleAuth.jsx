import { Box, CircularProgress, Grow } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TermsAndConditions from "./TermsAndConditions";
import useGoogleAuth from "../customHooks/useGoogleAuth";

function GoogleAuth() {
  const dispatch = useDispatch();
  const [openTermModal, setOpenTermModal] = useState(false);

  const { authLoading } = useSelector((state) => state.auth);
  const { themeMode } = useSelector((state) => state.theme);

  const { handleGoogleAuth } = useGoogleAuth();

  return (
    <>
      <div className="googleAuth">
        <Box
          width={"30rem"}
          sx={{ display: "flex", flexDirection: "column", gap: 1 }}
        >
          <Grow in={true} timeout={1000} style={{ transformOrigin: "0 0" }}>
            <Box>
              <img
                src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
                alt="svg"
                width={"45px"}
                style={{ transform: "translate(6rem, 1.2rem)" }}
              />
              <h1
                className="text-gradient"
                style={{
                  fontSize: "5rem",
                  fontWeight: 540,
                }}
              >
                Whisper AI
              </h1>
            </Box>
          </Grow>
          <Grow in={true} timeout={1200} style={{ transformOrigin: "0 0" }}>
            <p style={{ fontSize: "2rem", fontWeight: "550" }}>
              Supercharge your creativity and productivity
            </p>
          </Grow>
          <Grow in={true} timeout={1500} style={{ transformOrigin: "0 0" }}>
            <p
              style={{ fontSize: "17px", fontWeight: "500", color: "#b8b8b8" }}
            >
              Chat to start writing, planning, learning and more with Whisper
              AI.
            </p>
          </Grow>
          <Box mt={"1rem"}>
            <button
              style={{
                padding: "0.7rem 0",
                width: "6.6rem",
                border: "none",
                borderRadius: "20px",
                backgroundColor: "#8ab4f8",
                fontWeight: "500",
                cursor: "pointer",
              }}
              onClick={handleGoogleAuth}
            >
              {authLoading ? <CircularProgress size={15} /> : "Sign in"}
            </button>
          </Box>
        </Box>
        <div
          className="googleAuthFooter"
          style={{
            backgroundColor: themeMode === "dark" ? "#38393f" : "#f8f9fa",
          }}
        >
          <p style={{ color: themeMode === "dark" ? "#f7f7f7" : "#525151" }}>
            All right reserved {new Date().getFullYear()}
          </p>
          <p style={{ color: themeMode === "dark" ? "#f7f7f7" : "#525151" }}>
            |
          </p>
          <button
            onClick={() => setOpenTermModal(true)}
            style={{ color: themeMode === "dark" ? "#e4e4e7" : "#525151" }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                themeMode === "dark"
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(0,0,0,0.1)")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            Privacy & Terms
          </button>
        </div>
      </div>
      <TermsAndConditions
        openTermModal={openTermModal}
        setOpenTermModal={setOpenTermModal}
      />
    </>
  );
}

export default GoogleAuth;
