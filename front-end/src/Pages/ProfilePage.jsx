import React, { useEffect, useState } from "react";
import defaultCoverPic from "../assets/cover-photos/cover-pic.jpg";
import defaultProfile from "../assets/profiles/profile.jpeg";
import Container from "../Components/Container";
import SubContainer from "../Components/SubContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const ProfilePage = () => {
  const [info, setInfo] = useState(null);
  const [deadlines, setDeadlines] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    const headers = { Authorization: `Bearer ${token}` };

    axios.get("http://localhost:8080/api/dashboard/profile", { headers })
      .then(res => {
        setInfo(res.data);
      });

    axios.get("http://localhost:8080/api/dashboard/deadlines", { headers })
      .then(res => {
        setDeadlines(res.data.map(d => ({
          id: d.id,
          name: d.subject,
          deadline: d.dueDate ? new Date(d.dueDate).toLocaleDateString("en-GB") : "",
        })));
      });

    axios.get("http://localhost:8080/api/dashboard/announcements", { headers })
      .then(res => {
        setAnnouncements(res.data.map(a => ({
          id: a.id,
          name: a.title,
          deadline: a.date ? new Date(a.date) : null,
        })));
      }).finally(() => setLoading(false));
  }, []);

  if (loading || !info) return <div>Loading...</div>;

  return (
    <section>
      <Container>
        {/* Cover Photo */}
        <div className="h-60 w-full overflow-hidden relative">
          <img src={defaultCoverPic} alt="Cover Photo" className="object-cover w-full h-full" />
        </div>
        {/* Profile Picture (overlapping) */}
        <div className="left-[50%] translate-x-[50%] tanslate-y-[50%] top-[45%] absolute w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-md">
          <img src={defaultProfile} alt="Profile Picture" className="w-full h-full object-cover" />
        </div>

        {/* Info Section */}
        <div className="mt-20 flex flex-col items-center justify-center">
          <div className="bg-white px-8 py-6 rounded-md shadow flex flex-wrap justify-center items-center gap-6 text-center">
            <div className="px-6 border-r border-gray-300">
              <h1 className="font-bold text-2xl">{info.accountName}</h1>
              <h3 className="text-gray-500">{info.nationality}</h3>
            </div>
            <div className="px-6 border-r border-gray-300">
              <h1 className="font-bold text-2xl">SBS{info.studentId}</h1>
              <h3 className="text-gray-500">Student ID</h3>
            </div>
            <div className="px-6 border-r border-gray-300">
              <h1 className="font-bold text-2xl">{info.email}</h1>
              <h3 className="text-gray-500">Email</h3>
            </div>
            <div className="px-6">
              <h1 className="font-bold text-2xl">{info.pathway}</h1>
              <h3 className="text-gray-500">Pathway</h3>
            </div>
            <button className="bg-[#0D5EA6] px-4 py-3 text-white rounded-md">Send Message</button>
          </div>
        </div>

        {/* SubContainer */}
        <SubContainer>
          <div className="grid grid-cols-3 mt-20 gap-3">
            <div className="bg-white p-5 col-span-2 row-span-2 rounded-md">
              <h1 className="uppercase text-gray-500 text-xl border-b border-font-light pb-5">Class Timeline</h1>
            </div>
            <div className="bg-white p-5 col-span-1 rounded-md">
              <h1 className="uppercase text-gray-500 text-xl border-b border-font-light pb-5">Upcoming Deadlines</h1>
              <div>
                {deadlines.map(el => (
                  <div key={el.id} className="flex justify-between items-center border-b border-font-light py-3">
                    <h1 className="flex justify-start items-center gap-2">
                      <span className="block rounded-full bg-amber-600 w-2 h-2"></span>
                      {el.name}
                    </h1>
                    <p>{el.deadline}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-5 col-span-1 rounded-md">
              <h1 className="uppercase text-gray-500 text-xl border-b border-font-light pb-5 mb-5">Announcement</h1>
              <div className="grid grid-cols-2 gap-3">
                {announcements.map((el) => (
                  <div key={el.id} className="bg-blue-100 rounded-md p-2">
                    <h3 className="text-font-light mb-2">
                      {el.deadline && el.deadline.toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </h3>
                    <div className="flex justify-between items-center">
                      <h1>{el.name}</h1>
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