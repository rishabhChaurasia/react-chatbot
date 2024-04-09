import { createSlice } from "@reduxjs/toolkit";

const promptSlice = createSlice({
  name: "prompt",
  initialState: {
    promptValue: "",
  },
  reducers: {
    setPromptValue: (state, action) => {
      state.promptValue = action.payload;
    },
    clearPromptValue: (state) => {
      state.promptValue = "";
    },
  },
});

export const { setPromptValue, clearPromptValue } = promptSlice.actions;

export default promptSlice.reducer;
