import {
  Avatar,
  Badge,
  Box,
  Button,
  Dialog,
  Fade,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Zoom,
} from "@mui/material";
import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { authUserLogout } from "../redux/slices/authSlice";
import TermsAndConditions from "./TermsAndConditions";
import UpdateProfilePic from "./UpdateProfilePic";

function Header() {
  const { themeMode } = useSelector((state) => state.theme);
  const { authUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openTermModal, setOpenTermModal] = useState(false);
  const [openUpdateProfile, setOpenUpdateProfile] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <Button
        variant="text"
        size="large"
        sx={{
          color: themeMode === "dark" ? "#c4c7c5" : "#3c4043",
          fontWeight: 450,
          fontSize: "1.2rem",
          fontFamily: "Google sans",
          textTransform: "capitalize",
        }}
        endIcon={
          <IoMdArrowDropdown
            color={themeMode === "dark" ? "#fff" : "#3c4043"}
          />
        }
        onClick={handleClick}
      >
        Gemini
      </Button>

      <Tooltip
        title={
          <>
            <p>Google Account</p>
            <p>{authUser?.displayName}</p>
            <p>{authUser?.email}</p>
          </>
        }
        TransitionComponent={Zoom}
      >
        <IconButton onClick={() => setOpenDialog(true)}>
          <Avatar
            src={authUser?.photoURL}
            sx={{ width: 37, height: 37, cursor: "pointer" }}
          />
        </IconButton>
      </Tooltip>
      <Dialog
        onClose={() => setOpenDialog(false)}
        open={openDialog}
        TransitionComponent={Fade}
        sx={{
          "& .MuiDialog-container": {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            transform: "translate(1.5rem,2rem)",
          },
          "& .MuiDialog-paper": {
            width: "23rem",
            height: "50vh",
            backgroundColor: themeMode === "dark" ? "#38393f" : "#f0f4f9",
            color: themeMode === "dark" ? "#edebeb" : "#3d3d3d",
            borderRadius: "2rem",
            padding: "0.4rem 1.5rem",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
          },
        }}
        PaperProps={{ elevation: 1 }}
        BackdropProps={{ invisible: true }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            transform: "translateX(1rem)",
          }}
        >
          <p style={{ fontSize: "0.9rem" }}>{authUser?.email}</p>
          <IconButton
            sx={{
              transform: "translateX(3.4rem)",
              color: themeMode === "dark" ? "#edebeb" : "#3d3d3d",
            }}
            onClick={() => setOpenDialog(false)}
          >
            <IoMdClose />
          </IconButton>
        </Box>
        <Box
          onClick={() => {
            setOpenUpdateProfile(true);
            setOpenDialog(false);
          }}
        >
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <Box
                sx={{
                  background:
                    themeMode === "dark"
                      ? "rgba(0,0,0,0.9)"
                      : "rgba(255,255,255,0.9)",
                  borderRadius: "50%",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: themeMode === "dark" ? "#444" : "#dce7f5",
                  },
                }}
              >
                <MdOutlineEdit
                  style={{ padding: "0.2rem 0.3rem", fontSize: "1rem" }}
                />
              </Box>
            }
          >
            <Avatar
              src={authUser?.photoURL}
              sx={{ width: 85, height: 85, cursor: "pointer" }}
            />
          </Badge>
        </Box>
        <p style={{ fontSize: "1.6rem" }}>Hi, {authUser?.displayName}!</p>
        <button
          className="manageGoogleAccountBtn"
          style={{
            border: `0.8px solid ${
              themeMode === "dark" ? "#8ab4f8" : "#706f6f"
            }`,
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor =
              themeMode === "dark"
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)")
          }
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          <a
            href="https://myaccount.google.com/u/1/?hl=en&utm_source=OGB&utm_medium=act&pli=1"
            style={{ color: themeMode === "dark" ? "#9fc0fa" : "#1a73e8" }}
          >
            Manage your Google Account
          </a>
        </button>

        <button
          onClick={() => dispatch(authUserLogout())}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "23rem",
            height: "3.6rem",
            border: "none",
            outline: "none",
            borderRadius: "3rem",
            background: themeMode === "dark" ? "#2b2c33" : "#fff",
            color: themeMode === "dark" ? "#8ab4f8" : "#706f6f",
            fontWeight: 550,
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor =
              themeMode === "dark" ? "#38393f" : "#f0f4f9")
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor =
              themeMode === "dark" ? "#2b2c33" : "#fff")
          }
        >
          <IconButton
            sx={{ color: themeMode === "dark" ? "#8ab4f8" : "#706f6f" }}
          >
            <RiLogoutCircleRLine />
          </IconButton>
          Sign out
        </button>

        <button
          className="headerTermsBtn"
          onClick={() => setOpenTermModal(true)}
          style={{ color: themeMode === "dark" ? "#e4e4e7" : "#525151" }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor =
              themeMode === "dark"
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)")
          }
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          Privacy & Terms
        </button>
      </Dialog>
      <TermsAndConditions
        openTermModal={openTermModal}
        setOpenTermModal={setOpenTermModal}
      />
      <UpdateProfilePic
        openUpdateProfile={openUpdateProfile}
        setOpenUpdateProfile={setOpenUpdateProfile}
      />
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        PaperProps={{
          elevation: 0,
          style: {
            backgroundColor: themeMode === "dark" ? "#38393f" : "#f0f4f9",
            color: "#fff",
          },
        }}
      >
        <MenuItem
          sx={{
            color: themeMode === "dark" ? "#fff" : "#3c4043",
            fontWeight: 500,
            fontSize: "1rem",
            fontFamily: "Google sans",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ListItemIcon>
            <img
              src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
              alt="svg"
              width={"20px"}
            />
          </ListItemIcon>
          Gemini
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Header;
