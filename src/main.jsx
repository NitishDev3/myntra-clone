import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Loading from "./components/Loading.jsx";

const Login = lazy(() => import("./components/Login.jsx"));
const Men = lazy(() => import("./components/Men.jsx"));
const Women = lazy(() => import("./components/Women.jsx"));
const Kids = lazy(() => import("./components/Kids.jsx"));
const Beauty = lazy(() => import("./components/Beauty.jsx"));
const HomeLiving = lazy(() => import("./components/HomeLiving.jsx"));

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
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/men",
        element: (
          <Suspense fallback={<Loading />}>
            <Men />
          </Suspense>
        ),
      },
      {
        path: "/women",
        element: (
          <Suspense fallback={<Loading />}>
            <Women />
          </Suspense>
        ),
      },
      {
        path: "/kids",
        element: (
          <Suspense fallback={<Loading />}>
            <Kids />
          </Suspense>
        ),
      },
      {
        path: "/homeliving",
        element: (
          <Suspense fallback={<Loading />}>
            <HomeLiving />
          </Suspense>
        ),
      },
      {
        path: "/beauty",
        element: (
          <Suspense fallback={<Loading />}>
            <Beauty />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
