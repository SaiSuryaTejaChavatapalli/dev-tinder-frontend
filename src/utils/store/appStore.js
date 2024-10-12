import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import feedReducer from "../slices/feedSlice";
import connectionsReducer from "../slices/connectionsSlice";
import connectionRequestsReducer from "../slices/connectionRequests";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connections: connectionsReducer,
    connectionRequests: connectionRequestsReducer,
  },
});

export default appStore;
