import React, { useState } from "react";
import {
  Box,
  Fade,
  Grow,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Zoom,
  Slide,
  Snackbar,
} from "@mui/material";
import { FaBars } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { TbLogout, TbProgressHelp } from "react-icons/tb";
import { MdDarkMode, MdLightMode, MdOutlineSettings } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice";
import { authUserLogout } from "../redux/slices/authSlice";
import { toast } from "react-toastify";

function Sidebar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { themeMode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(authUserLogout());
    handleClose();
    toast("Logged out successfully");
  };

  return (
    <div
      className={`sidebar ${toggleMenu ? "active" : ""}`}
      style={{
        backgroundColor: themeMode === "dark" ? "#38393f" : "#f0f4f9",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem 0",
          transform: "translateX(15px)",
          gap: 5,
        }}
      >
        <Box>
          <Tooltip title="Expand Menu" TransitionComponent={Zoom}>
            <IconButton
              onClick={() => setToggleMenu((prev) => !prev)}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              <FaBars
                size={"1.2rem"}
                color={themeMode === "dark" ? "#fff" : "#3c4043"}
              />
            </IconButton>
          </Tooltip>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            background: toggleMenu ? "rgba(0,0,0,0.1)" : "",
            width: "55%",
            borderRadius: "20px",
          }}
        >
          <Tooltip title="New chat" TransitionComponent={Zoom}>
            <IconButton
              sx={{
                background: !toggleMenu ? "rgba(0,0,0,0.04)" : "",
                borderRadius: "50%",
              }}
            >
              <IoMdAdd
                size={"1.5rem"}
                color={themeMode === "dark" ? "#fff" : "#3c4043"}
              />
            </IconButton>
          </Tooltip>
          {toggleMenu && (
            <Grow
              in={true}
              timeout={1800}
              style={{ transformOrigin: "0 0 0 0" }}
            >
              <p
                style={{
                  color: themeMode === "dark" ? "#fff" : "#3c4043",
                  fontWeight: "700",
                  fontSize: "0.8rem",
                }}
              >
                New Chat
              </p>
            </Grow>
          )}
        </Box>
      </Box>

      <Box
        sx={{
          transform: "translate(15px , 25em)",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Box>
          <Tooltip title="Help" TransitionComponent={Zoom} placement="right">
            <IconButton
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
              onClick={() => toast("hey")}
            >
              <TbProgressHelp
                color={themeMode === "dark" ? "#fff" : "#3c4043"}
              />
            </IconButton>
          </Tooltip>
        </Box>

        <Box>
          <Tooltip
            title="Settings"
            TransitionComponent={Zoom}
            placement="right"
          >
            <IconButton
              onClick={handleClick}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              <MdOutlineSettings
                color={themeMode === "dark" ? "#fff" : "#3c4043"}
              />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        PaperProps={{
          elevation: 0,
          style: {
            backgroundColor: themeMode === "dark" ? "#38393f" : "#f0f4f9",
            color: "#fff",
            transform: "translate(3.3rem, -4rem)",
          },
        }}
      >
        <MenuItem
          onClick={() => {
            dispatch(toggleTheme());
            handleClose();
          }}
          sx={{
            color: themeMode === "dark" ? "#fff" : "#000",
            fontSize: "0.9rem",
            fontWeight: 520,
          }}
        >
          <ListItemIcon>
            {themeMode === "dark" ? (
              <MdDarkMode color="#fff" size={"1.2rem"} />
            ) : (
              <MdLightMode
                color={themeMode === "dark" ? "#fff" : "#3c4043"}
                size={"1.2rem"}
              />
            )}
          </ListItemIcon>
          {themeMode === "dark" ? "Dark" : "Light"} Mode
        </MenuItem>
        <MenuItem
          sx={{
            color: themeMode === "dark" ? "#fff" : "#000",
            fontSize: "0.9rem",
            fontWeight: 520,
          }}
          onClick={handleLogout}
        >
          <ListItemIcon>
            <TbLogout
              color={themeMode === "dark" ? "#fff" : "#3c4043"}
              size={"1.2rem"}
            />
          </ListItemIcon>
          Sign out
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Sidebar;
