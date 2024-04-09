import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { TbPrompt } from "react-icons/tb";
import { setPromptValue } from "../redux/slices/promptSlice";

const Card = ({ inputValue }) => {
  const { themeMode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <Box
      className="card"
      sx={{
        backgroundColor: themeMode === "dark" ? "#38393f" : "#f0f4f9",
        "&:hover": {
          backgroundColor:
            themeMode === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)",
        },
      }}
      onClick={() => dispatch(setPromptValue(inputValue))}
    >
      <p>{inputValue}</p>

      <div
        className="cardIcon"
        style={{ backgroundColor: themeMode === "dark" ? "#2b2c33" : "#fff" }}
      >
        <TbPrompt />
      </div>
    </Box>
  );
};

export default Card;
