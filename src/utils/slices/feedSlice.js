import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feedData: [],
  errorMessage: "",
  loading: false,
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    addFeedData: (state, action) => {
      state.feedData = action.payload;
      return state;
    },
    removeFeedData: (state) => {
      state.feedData = null;
      return state;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
      return state;
    },
    removeUserFromFeed: (state, action) => {
      state.feedData = state.feedData.filter(
        (feed) => feed._id !== action.payload
      );
      return state;
    },
  },
});

export default feedSlice.reducer;
export const { addFeedData, setErrorMessage, removeUserFromFeed } =
  feedSlice.actions;
