import { createBrowserRouter } from "react-router";

import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import FallbackSpinner from "../Components/FallbackSpinner";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <FallbackSpinner />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/AppsData.json"),
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/app/:id",
        element: <AppDetails />,
      },
    ],
  },
]);

export default router;
