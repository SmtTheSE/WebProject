import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import ProfilePage from "../Pages/ProfilePage";
import AcademicPage from "../Pages/AcademicPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "academic",
        element: <AcademicPage />,
      }
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default router;
