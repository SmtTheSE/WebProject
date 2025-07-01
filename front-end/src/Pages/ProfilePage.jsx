import React, { useEffect, useState } from "react";
import defaultCoverPic from "../assets/cover-photos/cover-pic.jpg";
import defaultProfile from "../assets/profiles/profile.jpeg";
import Container from "../Components/Container";
import SubContainer from "../Components/SubContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  // State to store API data
  const [profile, setProfile] = useState(null);
  const [deadlines, setDeadlines] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [classSchedule, setClassSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Helper: Format date
  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Helper: Format time
  const formatTime = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Fetch data on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // Redirect to login if not authenticated
      navigate("/login");
      return;
    }
    // Axios config with JWT
    const api = axios.create({
      baseURL: "http://localhost:8080/api/dashboard",
      headers: { Authorization: `Bearer ${token}` },
    });

    // Fetch all dashboard data in parallel
    Promise.all([
      api.get("/profile"),
      api.get("/deadlines"),
      api.get("/announcements"),
      api.get("/schedule"),
    ])
      .then(([profileRes, deadlinesRes, announcementsRes, scheduleRes]) => {
        setProfile(profileRes.data);
        setDeadlines(deadlinesRes.data);
        setAnnouncements(announcementsRes.data);
        setClassSchedule(scheduleRes.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(
          err?.response?.data?.message ||
            "Failed to load dashboard data. Please try again."
        );
        setLoading(false);
      });
  }, [navigate]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading dashboard...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-600">
        {error}
      </div>
    );

  return (
    <section>
      <Container>
        {/* Cover Photo */}
        <div className="h-60 w-full overflow-hidden relative">
          <img
            src={defaultCoverPic}
            alt="Cover Photo"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Profile Picture */}
        <div className="left-[50%] translate-x-[50%] tanslate-y-[50%] top-[45%] absolute w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-md">
          <img
            src={defaultProfile}
            alt="Profile Picture"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="mt-20 flex flex-col items-center justify-center">
          {profile && (
            <div className="bg-white px-8 py-6 rounded-md shadow flex flex-wrap justify-center items-center gap-6 text-center">
              <div className="px-6 border-r border-gray-300">
                <h1 className="font-bold text-2xl">{profile.accountName}</h1>
                <h3 className="text-gray-500">{profile.nationality}</h3>
              </div>
              <div className="px-6 border-r border-gray-300">
                <h1 className="font-bold text-2xl">
                  SBS{profile.studentId}
                </h1>
                <h3 className="text-gray-500">Student ID</h3>
              </div>
              <div className="px-6 border-r border-gray-300">
                <h1 className="font-bold text-2xl">
                  {profile.email}
                </h1>
                <h3 className="text-gray-500">Email</h3>
              </div>
              <div className="px-6">
                <h1 className="font-bold text-2xl">{profile.pathway}</h1>
                <h3 className="text-gray-500">Pathway</h3>
              </div>
              <button className="bg-[#0D5EA6] px-4 py-3 text-white rounded-md">
                Send Message
              </button>
            </div>
          )}
        </div>

        {/* SubContainer */}
        <SubContainer>
          <div className="grid grid-cols-3 mt-20 gap-3">
            <div className="bg-white p-5 col-span-2 row-span-2 rounded-md">
              <h1 className="uppercase text-gray-500 text-xl border-b border-font-light pb-5">
                Class Timeline
              </h1>
              <div>
                {classSchedule.length === 0 && (
                  <div className="text-gray-400 mt-4">No schedule available</div>
                )}
                {classSchedule.map((cls) => (
                  <div
                    key={cls.id}
                    className="border-b border-font-light py-3 flex flex-col md:flex-row md:justify-between"
                  >
                    <div>
                      <span className="font-bold">{cls.subject}</span>
                      <span className="text-gray-400 ml-2 text-xs">
                        ({cls.instructor})
                      </span>
                    </div>
                    <div>
                      <span className="mr-4">
                        {formatDate(cls.startTime)} {formatTime(cls.startTime)}
                      </span>
                      <span className="mr-2">-</span>
                      <span>
                        {formatDate(cls.endTime)} {formatTime(cls.endTime)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-5 col-span-1 rounded-md">
              <h1 className="uppercase text-gray-500 text-xl border-b border-font-light pb-5">
                Upcoming Deadlines
              </h1>
              <div>
                {deadlines.length === 0 && (
                  <div className="text-gray-400 mt-4">No deadlines</div>
                )}
                {deadlines.map((el) => (
                  <div
                    key={el.id}
                    className="flex justify-between items-center border-b border-font-light py-3"
                  >
                    <h1 className="flex justify-start items-center gap-2">
                      <span className="block rounded-full bg-amber-600 w-2 h-2"></span>
                      {el.subject}
                    </h1>
                    <p>{formatDate(el.dueDate)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-5 col-span-1 rounded-md">
              <h1 className="uppercase text-gray-500 text-xl border-b border-font-light pb-5 mb-5">
                Announcement
              </h1>
              <div className="grid grid-cols-2 gap-3">
                {announcements.length === 0 && (
                  <div className="col-span-2 text-gray-400">No announcements</div>
                )}
                {announcements.map((el) => (
                  <div
                    key={el.id}
                    className="bg-blue-100 rounded-md p-2"
                  >
                    <h3 className="text-font-light mb-2">
                      {formatDate(el.date)}
                    </h3>
                    <div className="flex justify-between items-center">
                      <h1>{el.title}</h1>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SubContainer>
      </Container>
    </section>
  );
};

export default ProfilePage;