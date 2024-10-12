import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log("action payload", action.payload);
      state.userData = action.payload;
      return state;
    },
    removeUser: () => {
      return initialState;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
