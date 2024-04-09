import { Avatar, Backdrop, Fade, Modal, CircularProgress } from "@mui/material";
import React, { useRef } from "react";
import { IoMdTrash } from "react-icons/io";
import { MdOutlineModeEdit, MdSaveAs } from "react-icons/md";
import { useSelector } from "react-redux";
import usePreviewImg from "../customHooks/usePreviewImg";
import useEditProfile from "../customHooks/useEditProfile";
import useRemovePic from "../customHooks/useRemovePic";

const UpdateProfilePic = ({ openUpdateProfile, setOpenUpdateProfile }) => {
  const { themeMode } = useSelector((state) => state.theme);
  const { authUser } = useSelector((state) => state.auth);

  const { selectedFile, setSelectedFile, handleImageChange } = usePreviewImg();
  const { uploadProfileDetails, editProfileLoading } = useEditProfile();
  const { removePicLoading, removePic } = useRemovePic();

  const fileRef = useRef(null);

  const handleCancelUpdateProfile = () => {
    if (selectedFile) {
      setSelectedFile(null);
    }
    setOpenUpdateProfile(false);
  };

  const handleRemoveProfilePic = async () => {
    if (selectedFile) {
      setSelectedFile(null);
    } else {
      await removePic();
      setOpenUpdateProfile(false);
    }
  };

  const handleSaveProfilePic = async (e) => {
    e.preventDefault();
    try {
      await uploadProfileDetails(selectedFile);
      setSelectedFile(null);
      setOpenUpdateProfile(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openUpdateProfile}
      onClose={() => setOpenUpdateProfile(false)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Fade in={openUpdateProfile}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 450,
            height: "80vh",
            overflowY: "auto",
            backgroundColor: themeMode === "dark" ? "#38393f" : "#e3e4e6",
            padding: "2.2rem",
            outline: "none",
            borderRadius: "10px",
          }}
        >
          <div className="updateProfileModal">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <p
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "500",
                  color: themeMode === "dark" ? "#ddd" : "#636262",
                }}
              >
                Google <span style={{ fontWeight: "100" }}>Account</span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <p style={{ fontSize: "1.25rem" }}>Profile Picture</p>
                <p style={{ fontSize: "0.9rem" }}>
                  A picture helps people recognize you and lets you know when
                  you’re signed in to your account
                </p>
              </div>
            </div>
            <Avatar
              src={selectedFile || authUser?.photoURL}
              sx={{ width: 300, height: 300 }}
            />
            <div className="updateProfileBtn">
              <button onClick={() => fileRef.current.click()}>
                <MdOutlineModeEdit /> Change
              </button>
              <input
                type="file"
                hidden
                ref={fileRef}
                onChange={handleImageChange}
              />
              <button onClick={handleSaveProfilePic}>
                {editProfileLoading ? (
                  <CircularProgress size={18} />
                ) : (
                  <>
                    <MdSaveAs /> Save
                  </>
                )}
              </button>
              <button onClick={handleRemoveProfilePic}>
                {removePicLoading ? (
                  <CircularProgress size={18} />
                ) : (
                  <>
                    <IoMdTrash /> Remove
                  </>
                )}
              </button>
              <button onClick={handleCancelUpdateProfile}>Cancel</button>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default UpdateProfilePic;
