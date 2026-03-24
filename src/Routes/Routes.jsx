import { createBrowserRouter } from "react-router";

import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import FallbackSpinner from "../Components/FallbackSpinner";
import Home from "../Pages/Home";

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
    ],
  },
]);

export default router;
