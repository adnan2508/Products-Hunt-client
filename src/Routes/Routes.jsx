import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../components/Login";
import Register from "../components/Register";
import NotFound from "../components/NotFound";
import Home from "../Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default router;
