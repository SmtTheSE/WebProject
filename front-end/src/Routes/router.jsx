import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import ProfilePage from "../Pages/ProfilePage";
import Transcripts from "../Pages/Transcripts";
import StudyPlan from "../Pages/StudyPlan";
import Attendance from "../Pages/Attendance";
import HomePage from "../Pages/HomePage";
import AdminAnnouncementManager from "../Pages/AdminAnnouncementManager";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
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
  // Admin Routes
  {
    path: "admin",
    children: [
      {
        path: "announcements",
        element: <AdminAnnouncementManager />,
      },

    ],
  },
]);

export default router;