import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  connectionsList: [],
  loading: false,
  errorMessage: "",
};
const connectionsSlice = createSlice({
  name: "connections",
  initialState,
  reducers: {
    addConnections: (state, action) => {
      state.connectionsList = action.payload;
      return state;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export default connectionsSlice.reducer;
export const { addConnections, setLoading } = connectionsSlice.actions;
