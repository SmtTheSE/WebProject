import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import ProfilePage from "../Pages/ProfilePage";
import AcademicPage from "../Pages/AcademicPage";
import Transcripts from "../Pages/Transcripts";
import StudyPlan from "../Pages/StudyPlan";
import Attendance from "../Pages/Attendance";

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
      },
      {
        path: "study-plan",
        element: <StudyPlan />
      },
      {
        path: "attendence",
        element: <Attendance />
      }
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default router;
