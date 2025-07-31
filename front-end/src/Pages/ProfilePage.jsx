import React, { useEffect, useState } from "react";
import defaultCoverPic from "../assets/cover-photos/cover-pic.jpg";
import defaultProfile from "../assets/profiles/profile.jpeg";
import Container from "../Components/Container";
import SubContainer from "../Components/SubContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import donePayment from "../assets/icons/done-payment.png";
import failPayment from "../assets/icons/fail-payment.png";
import payment from "../assets/icons/payment.png";
import credit from "../assets/icons/score.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [generalInfo, setGeneralInfo] = useState({ paymentStatus: null, totalCredits: null });
  const [classTimeline, setClassTimeline] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    axios.get("http://localhost:8080/api/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        setProfile(res.data);
        fetchGeneralInfo(res.data.studentId);
        fetchClassTimeline(res.data.studentId);
      })
      .catch(() => navigate("/login"));
  }, []);

  const fetchGeneralInfo = (studentId) => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    axios.get(`http://localhost:8080/api/tuition-payments/student/${studentId}`, { headers })
      .then((res) => {
        const paymentStatus = res.data.some(p => p.paymentStatus === 1) ? 1 : 0;
        setGeneralInfo(prev => ({ ...prev, paymentStatus }));
      })
      .catch(() => setGeneralInfo(prev => ({ ...prev, paymentStatus: 0 })));

    axios.get(`http://localhost:8080/api/academic/course-results/total-credits/${studentId}`, { headers })
      .then((res) => setGeneralInfo(prev => ({ ...prev, totalCredits: res.data })))
      .catch(() => setGeneralInfo(prev => ({ ...prev, totalCredits: 0 })));
  };

  const fetchClassTimeline = (studentId) => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    axios.get(`http://localhost:8080/api/academic/class-timelines/${studentId}`, { headers })
      .then((res) => {
        const grouped = res.data.reduce((acc, curr) => {
          if (!acc[curr.dayOfWeek]) acc[curr.dayOfWeek] = [];
          acc[curr.dayOfWeek].push(curr);
          return acc;
        }, {});

        const formatted = Object.entries(grouped).map(([day, subjects], index) => ({
          id: index,
          day,
          date: new Date(subjects[0].classDate),
          subjects: subjects.map((s, i) => ({
            id: i,
            subject: s.courseName,
            lecturer: s.lecturerName || "TBD",
            startTime: s.startTime,
            endTime: s.endTime,
          })),
        }));

        setClassTimeline(formatted);
      })
      .catch(() => setClassTimeline([]));
  };

  const otherInfos = [
    {
      id: 1,
      name: "Payment",
      icon: payment,
      data: generalInfo.paymentStatus,
    },
    {
      id: 2,
      name: "Total Credits",
      icon: credit,
      data: generalInfo.totalCredits,
    },
  ];

  return (
    <section>
      <Container>
        <div className="h-60 w-full overflow-hidden relative">
          <img src={defaultCoverPic} alt="Cover Photo" className="object-cover w-full h-full" />
        </div>
        <SubContainer>
          <div className="flex justify-start items-center gap-5 my-10">
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-md">
              <img src={defaultProfile} alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col items-center justify-center">
              {profile && (
                <div key={profile.studentId} className="bg-white px-8 py-6 rounded-md shadow flex flex-wrap justify-center items-center gap-6 text-center">
                  <div className="px-6 border-r border-gray-300">
                    <h1 className="font-bold text-2xl">{profile.name}</h1>
                    <h3 className="text-gray-500">{profile.nativeCountry}</h3>
                  </div>
                  <div className="px-6 border-r border-gray-300">
                    <h1 className="font-bold text-2xl">SBS{profile.studentId}</h1>
                    <h3 className="text-gray-500">Student ID</h3>
                  </div>
                  <div className="px-6 border-r border-gray-300">
                    <h1 className="font-bold text-2xl">{profile.email}@sbsuni.edu.vn</h1>
                    <h3 className="text-gray-500">Email</h3>
                  </div>
                  <div className="px-6">
                    <h1 className="font-bold text-2xl">{profile.pathway}</h1>
                    <h3 className="text-gray-500">Pathway</h3>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 mb-5">
            {otherInfos.map((otherInfo, index) => (
              <div key={index} className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-5">
                <div className="bg-background rounded-full w-20 h-20 overflow-hidden flex items-center justify-center mb-4">
                  <img src={otherInfo.icon} alt={otherInfo.name} className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{otherInfo.name}</h3>
                  <p className={
                    otherInfo.data === 0 ? "text-red-500" :
                    otherInfo.data === 1 ? "text-green-500" :
                    "text-font text-2xl"
                  }>
                    {otherInfo.data === 0 ? "Not yet" :
                    otherInfo.data === 1 ? "Completed" :
                    otherInfo.data}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white p-5 col-span-2 row-span-2 rounded-md">
              <h1 className="uppercase text-gray-500 text-xl border-b border-font-light pb-5">Class Timeline</h1>
              <div>
                {classTimeline.map((timeline) => (
                  <div key={timeline.id} className="grid grid-cols-4 py-5 border-b border-border">
                    <div className="col-span-1">
                      <h1 className="text-font text-2xl">{timeline.day}</h1>
                      <p className="text-font-light">{new Date(timeline.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</p>
                    </div>
                    <div className="col-span-3">
                      {!timeline.subjects?.length ? (
                        <h1 className="text-2xl text-font">No classes - Enjoy your day off!</h1>
                      ) : (
                        <div>
                          {timeline.subjects.map((sub) => (
                            <div key={sub.id}>
                              <div className="flex justify-start items-center">
                                <div className="w-25">
                                  <h3>{sub.startTime}</h3>
                                  <h3>{sub.endTime}</h3>
                                </div>
                                <div className="w-full p-5 border-l-5 border-border bg-background">
                                  <div className="flex justify-between items-center w-full">
                                    <h1 className="flex items-center gap-3">
                                      <span className="block rounded-full bg-amber-600 w-2 h-2"></span>
                                      {sub.subject}
                                    </h1>
                                    <h1>{sub.lecturer}</h1>
                                  </div>
                                </div>
                              </div>
                              <br />
                            </div>
                          ))}
                        </div>
                      )}
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
