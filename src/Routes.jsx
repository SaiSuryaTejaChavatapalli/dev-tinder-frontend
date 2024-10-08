import { createBrowserRouter } from "react-router-dom";

import Login from "./components/Login";
import Body from "./components/Body";
import Profile from "./components/Profile";
import Feed from "./components/Feed";

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
        element: <Profile />,
      },
      {
        path: "login",
        element: <Login />,
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
