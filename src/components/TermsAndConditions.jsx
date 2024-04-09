import { Backdrop, Box, Fade, Modal } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function TermsAndConditions({ openTermModal, setOpenTermModal }) {
  const { themeMode } = useSelector((state) => state.theme);

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openTermModal}
        onClose={() => setOpenTermModal(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openTermModal}>
          <div
            className="termAndCondition"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              height: "80vh",
              overflowY: "auto",
              backgroundColor: themeMode === "dark" ? "#38393f" : "#e3e4e6",
              padding: "2rem",
              outline: "none",
              borderRadius: "10px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <p
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 450,
                  letterSpacing: "-1px",
                  color: themeMode === "dark" ? "#edebeb" : "#3d3d3d",
                }}
              >
                WhisperAI Privacy Hub
              </p>
              <p
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 410,
                  letterSpacing: "-1px",
                  color: themeMode === "dark" ? "#edebeb" : "#3d3d3d",
                }}
              >
                Your data and WhisperAI
              </p>

              <p style={{ fontSize: "0.8rem", fontWeight: 410 }}>
                This notice and our Privacy Policy describe how we handles your
                data when you interact with our Whisper Apps. Whisper Apps”
                refers to our conversational AI service for consumers in apps
                that reference this notice.
              </p>
              <p style={{ fontSize: "0.8rem", fontWeight: 410 }}>
                We collects your Whisper Apps conversations, related product
                usage information, info about your location, and your feedback.
                We uses this data, consistent with our Privacy Policy, to
                provide, improve, and develop Whisper products and services and
                machine learning technologies, including Whisper's enterprise
                products such as Whisper cloud.
              </p>
              <p style={{ fontSize: "0.8rem", fontWeight: 410 }}>
                If you are 18 or older, or under 18 and turn Whisper Apps
                Activity on, then by default Google stores your Whisper Apps
                activity with your Google Account for up to 18 months, which you
                can change to 3 or 36 months in your Whisper Apps Activity
                setting. Info about your location, including the general area
                from your device, IP address, or Home or Work addresses in your
                Google Account, is also stored with your Whisper Apps activity.
                Learn more at g.co/privacypolicy/location.
              </p>
              <p style={{ fontSize: "0.8rem", fontWeight: 410 }}>
                To help with quality and improve our products (such as
                generative machine-learning models that power Gemini Apps),
                human reviewers read, annotate, and process your Gemini Apps
                conversations. We take steps to protect your privacy as part of
                this process. This includes disconnecting your conversations
                with Gemini Apps from your Google Account before reviewers see
                or annotate them. Please don’t enter confidential information in
                your conversations or any data you wouldn’t want a reviewer to
                see or Google to use to improve our products, services, and
                machine-learning technologies.
              </p>
              <p
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 410,
                  letterSpacing: "-1px",
                  color: themeMode === "dark" ? "#edebeb" : "#3d3d3d",
                }}
              >
                Terms of Service
              </p>
              <p style={{ fontSize: "0.8rem", fontWeight: 410 }}>
                You agree that your use of Whisper Apps is subject to the Google
                Terms of Service and the Generative AI Additional Terms of
                Service.
              </p>
              <p style={{ fontSize: "0.8rem", fontWeight: 410 }}>
                If you’re a Korea-based consumer, you also agree that your use
                of Whisper Apps is subject to the Korean Location Terms of
                Service.
              </p>
            </Box>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default TermsAndConditions;
