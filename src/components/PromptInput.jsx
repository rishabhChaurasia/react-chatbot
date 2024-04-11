import { useEffect, useState } from "react";
import { Tooltip, Zoom } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import TermsAndConditions from "./TermsAndConditions";
import { AnimatePresence, motion } from "framer-motion";
import { clearPromptValue } from "../redux/slices/promptSlice";
import { IoSendSharp } from "react-icons/io5";

function PromptInput({ handleSearchQuery }) {
  const { themeMode } = useSelector((state) => state.theme);
  const { promptValue } = useSelector((state) => state.prompt);
  const [openTermModal, setOpenTermModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (promptValue) {
      setSearchQuery(promptValue);
    }
    return () => {
      dispatch(clearPromptValue());
    };
  }, [promptValue]);

  const handleSubmit = async () => {
    await handleSearchQuery(searchQuery);
    setSearchQuery("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "just",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="promptInput"
          style={{
            backgroundColor: themeMode === "dark" ? "#38393f" : "#f0f4f9",
          }}
        >
          <input
            type="text"
            placeholder="Enter a prompt here"
            className={
              themeMode === "dark" ? "lightPlaceholder" : "darkPlaceholder"
            }
            style={{
              color: themeMode === "dark" ? "#fff" : "#000",
              fontSize: "0.9rem",
            }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {searchQuery && (
            <Tooltip
              title="click or press enter"
              TransitionComponent={Zoom}
              onClick={handleSubmit}
            >
              <div
                className={`${
                  themeMode === "dark" ? "darkSendButton" : "lightSendButton"
                }`}
              >
                <IoSendSharp />
              </div>
            </Tooltip>
          )}
        </motion.div>
      </AnimatePresence>
      <span className="termAndConditions">
        WhisperAI may display inaccurate info, including about people, so
        double-check its responses.&nbsp;
        <span
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            fontSize: "0.75rem",
          }}
          onClick={() => setOpenTermModal(true)}
        >
          Your privacy & Whisper Apps
        </span>
        <TermsAndConditions
          openTermModal={openTermModal}
          setOpenTermModal={setOpenTermModal}
        />
      </span>
    </>
  );
}

export default PromptInput;
