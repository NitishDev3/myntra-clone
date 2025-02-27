import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Men from "./components/Men.jsx";
import { Women } from "./components/Women.jsx";
import Kids from "./components/Kids.jsx";
import HomeLiving from "./components/HomeLiving.jsx";
import Beauty from "./components/Beauty.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/men",
        element: <Men />
      },
      {
        path: "/women",
        element: <Women />
      },
      {
        path: "/kids",
        element: <Kids />
      },
      {
        path: "/homeliving",
        element: <HomeLiving />
      },
      {
        path: "/beauty",
        element: <Beauty />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
