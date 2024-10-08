import { createBrowserRouter } from "react-router-dom";

import Login from "./components/Login";
import Body from "./components/Body";
import Profile from "./components/Profile";

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
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

export default router;
