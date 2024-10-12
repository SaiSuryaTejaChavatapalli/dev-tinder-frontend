import { createBrowserRouter } from "react-router-dom";

import Login from "./components/Login";
import Body from "./components/Body";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import ProtectedRoute from "./ProtectedRoute";
import ConnectionRequests from "./components/ConnectionRequests";
import Connections from "./components/Connections";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Body />
      </div>
    ),
    children: [
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "connection-requests",
        element: <ConnectionRequests />,
      },
      {
        path: "connections",
        element: <Connections />,
      },
      {
        path: "/",
        element: <Feed />,
      },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

export default router;
