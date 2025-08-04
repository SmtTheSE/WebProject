import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import ProfilePage from "../Pages/ProfilePage";
import AcademicPage from "../Pages/AcademicPage";
import Transcripts from "../Pages/Transcripts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AcademicPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "transcripts",
        element: <Transcripts />
      }
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default router;
