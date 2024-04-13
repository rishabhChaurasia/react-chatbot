import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userQueryData: null,
  recentUserQuery: "",
};

const userQuerySlice = createSlice({
  name: "userQuery",
  initialState,
  reducers: {
    setUserQuery: (state, action) => {
      state.userQueryData = action.payload;
    },
    clearUserQuery: (state) => {
      state.userQueryData = null;
    },
    setRecentUserQuery: (state, action) => {
      state.recentUserQuery = action.payload;
    },
    clearRecentUserQuery: (state) => {
      state.recentUserQuery = "";
    },
  },
});

export const {
  setUserQuery,
  clearUserQuery,
  setRecentUserQuery,
  clearRecentUserQuery,
} = userQuerySlice.actions;

export default userQuerySlice.reducer;
