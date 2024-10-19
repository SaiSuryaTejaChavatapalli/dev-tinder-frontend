import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  isAuthenticated: false,
  loading: true,
  accessToken: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.loading = true;
      state.userData = action.payload.data;
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = !!action.payload;
      return state;
    },
    removeUser: (state) => {
      state.loading = false;
      state.userData = null;
      state.accessToken = null;
      state.isAuthenticated = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { addUser, removeUser, setLoading } = userSlice.actions;
export default userSlice.reducer;
