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
  Badge,
} from "@mui/material";
import { FaBars, FaBarsProgress } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { TbProgressHelp } from "react-icons/tb";
import { MdDarkMode, MdLightMode, MdOutlineSettings } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice";
import CustomSwitch from "./CustomSwitch";
import { helpMenu } from "../staticData";
import {
  BsFillChatLeftDotsFill,
  BsShieldFillExclamation,
} from "react-icons/bs";
import { FaClipboardQuestion } from "react-icons/fa6";
import { LuCalendarRange } from "react-icons/lu";
import { PiWarningCircleBold } from "react-icons/pi";

function Sidebar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const { themeMode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const openSettings = Boolean(anchorEl);
  const handleOpenSettings = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseSettings = () => {
    setAnchorEl(null);
  };

  const toggleDarkMode = () => {
    dispatch(toggleTheme());
  };

  const openHelpMenu = Boolean(anchorEl2);
  const handleOpenHelpMenu = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleCloseHelpMenu = () => {
    setAnchorEl2(null);
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
            <p
              style={{
                color: themeMode === "dark" ? "#fff" : "#3c4043",
                fontWeight: "700",
                fontSize: "0.8rem",
              }}
            >
              New Chat
            </p>
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            width: "70%",
            borderRadius: "20px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <Tooltip title="Help" TransitionComponent={Zoom} placement="right">
            <IconButton
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
              onClick={handleOpenHelpMenu}
            >
              <Badge variant="dot" color="error" invisible={anchorEl2}>
                <TbProgressHelp
                  color={themeMode === "dark" ? "#fff" : "#3c4043"}
                />
              </Badge>
            </IconButton>
          </Tooltip>
          {toggleMenu && (
            <p
              style={{
                color: themeMode === "dark" ? "#fff" : "#3c4043",
                fontWeight: "500",
                fontSize: "0.9rem",
              }}
            >
              Help
            </p>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            width: "70%",
            borderRadius: "20px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <Tooltip
            title="Settings"
            TransitionComponent={Zoom}
            placement="right"
          >
            <IconButton
              onClick={handleOpenSettings}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              <Badge color="error" variant="dot" invisible={anchorEl}>
                <MdOutlineSettings
                  color={themeMode === "dark" ? "#fff" : "#3c4043"}
                />
              </Badge>
            </IconButton>
          </Tooltip>
          {toggleMenu && (
            <p
              style={{
                color: themeMode === "dark" ? "#fff" : "#3c4043",
                fontWeight: "500",
                fontSize: "0.9rem",
              }}
            >
              Settings
            </p>
          )}
        </Box>
      </Box>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={openSettings}
        onClose={handleCloseSettings}
        TransitionComponent={Fade}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        PaperProps={{
          elevation: 2,
          style: {
            backgroundColor: themeMode === "dark" ? "#38393f" : "#f0f4f9",
            color: "#fff",
            transform: "translate(3.3rem, -4rem)",
          },
        }}
      >
        <MenuItem
          sx={{
            color: themeMode === "dark" ? "#fff" : "#000",
            fontSize: "0.9rem",
            fontWeight: 520,
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontWeight: 450,
              color: themeMode === "dark" ? "#ddd" : "#3c4043",
            }}
          >
            {themeMode === "dark" ? (
              <MdDarkMode size={"1.4rem"} />
            ) : (
              <MdLightMode size={"1.4rem"} />
            )}
            {themeMode === "dark" ? "Dark" : "Light"} Mode
          </ListItemIcon>
          <ListItemIcon>
            <CustomSwitch onChange={toggleDarkMode} />
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemIcon
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontWeight: 450,
              color: themeMode === "dark" ? "#ddd" : "#3c4043",
            }}
          >
            <FaBarsProgress />
            Real-time responses
          </ListItemIcon>
        </MenuItem>
      </Menu>

      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={openHelpMenu}
        onClose={handleCloseHelpMenu}
        TransitionComponent={Fade}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        PaperProps={{
          elevation: 2,
          style: {
            backgroundColor: themeMode === "dark" ? "#38393f" : "#f0f4f9",
            color: "#fff",
            transform: "translate(3.3rem, -4rem)",
          },
        }}
      >
        {helpMenu.map((val, index) => {
          return (
            <MenuItem key={index}>
              <ListItemIcon
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontWeight: 450,
                  fontSize: "1rem",
                  color: themeMode === "dark" ? "#ddd" : "#3c4043",
                }}
              >
                {(() => {
                  switch (val.icon) {
                    case "BsShieldFillExclamation":
                      return <BsShieldFillExclamation size={"1.2rem"} />;
                    case "LuCalendarRange":
                      return <LuCalendarRange size={"1.2rem"} />;
                    case "BsFillChatLeftDotsFill":
                      return <BsFillChatLeftDotsFill size={"1.2rem"} />;
                    case "FaClipboardQuestion":
                      return <FaClipboardQuestion size={"1.2rem"} />;
                    case "PiWarningCircle":
                      return <PiWarningCircleBold size={"1.2rem"} />;
                  }
                })()}
                {val.name}
              </ListItemIcon>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}

export default Sidebar;
