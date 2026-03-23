import { createBrowserRouter } from "react-router";

import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import FallbackSpinner from "../Components/FallbackSpinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <FallbackSpinner />,
  },
]);

export default router;
