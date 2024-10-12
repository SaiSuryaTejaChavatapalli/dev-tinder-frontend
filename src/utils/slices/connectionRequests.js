import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  connectionRequestsList: [],
  loading: false,
  error: "",
};
const connectionRequestsSlice = createSlice({
  name: "connectionRequests",
  initialState,
  reducers: {
    addConnectionRequests: (state, action) => {
      state.connectionRequestsList = action.payload;
      return state;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export default connectionRequestsSlice.reducer;
export const { addConnectionRequests, setLoading } =
  connectionRequestsSlice.actions;
