import React from "react";
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

const ProfilePage = () => {
  const infos = [
    {
      studentID: 20240303,
      name: "Thomas Luke",
      nativeCountry: "France",
      email: "exp",
      pathway: "Canada",
    },
  ];

  const otherInfos = [
    {
      id: 1,
      name: "Payment",
      icon: payment,
      data: 1,
    },
    {
      id: 2,
      name: "Total Credits",
      icon: credit,
      data: 15,
    },
  ];

  const upcomingDeadlines = [
    {
      id: 1,
      name: "Programming",
      deadline: "21/7/2025",
    },
    {
      id: 2,
      name: "Math for computing",
      deadline: "21/7/2025",
    },
    {
      id: 3,
      name: "Data Analytic",
      deadline: "21/7/2025",
    },
    {
      id: 4,
      name: "Database Design",
      deadline: "21/7/2025",
    },
    {
      id: 5,
      name: "Advanced Programming",
      deadline: "21/7/2025",
    },
  ];

  const announcement = [
    {
      id: 1,
      name: "School annual function",
      deadline: new Date("2025-01-08"),
    },
    {
      id: 2,
      name: "Sport Competitions",
      deadline: new Date("2025-01-08"),
    },
  ];

  const classTimelines = [
    {
      id: 1,
      day: "Today",
      date: new Date("2017-01-03"),
      subjects: [
        {
          id: 1,
          subject: "Programming",
          lecturer: "John Doe",
          startTime: "8:00 am",
          endTime: "12:00 pm",
        },
        {
          id: 2,
          subject: "Math for computing",
          lecturer: "Alfredo Patterson",
          startTime: "1:00 pm",
          endTime: "5:00 pm",
        },
      ],
    },
    {
      id: 2,
      day: "Tuesday",
      date: new Date("2017-01-04"),
      subjects: null,
    },
    {
      id: 3,
      day: "Wednesday",
      date: new Date("2017-01-05"),
      subjects: [
        {
          id: 1,
          subject: "Data Analytic",
          lecturer: "John Doe",
          startTime: "8:00 am",
          endTime: "12:00 pm",
        },
        {
          id: 2,
          subject: "Math for computing",
          lecturer: "Alfredo Patterson",
          startTime: "1:00 pm",
          endTime: "5:00 pm",
        },
      ],
    },
    {
      id: 4,
      day: "Thursday",
      date: new Date("2017-01-03"),
      subjects: [
        {
          id: 1,
          subject: "Programming",
          lecturer: "John Doe",
          startTime: "8:00 am",
          endTime: "12:00 pm",
        },
      ],
    },
    {
      id: 5,
      day: "Friday",
      date: new Date("2017-01-04"),
      subjects: null,
    },
  ];

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
        <SubContainer>
          <div className="flex justify-start items-center gap-5 my-10">
            {/* Profile Picture (overlapping) */}
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-md">
              <img
                src={defaultProfile}
                alt="Profile Picture"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info Section */}
            <div className="flex flex-col items-center justify-center">
              {infos.map((info) => (
                <div
                  key={info.studentID}
                  className="bg-white px-8 py-6 rounded-md shadow flex flex-wrap justify-center items-center gap-6 text-center"
                >
                  <div className="px-6 border-r border-gray-300">
                    <h1 className="font-bold text-2xl">{info.name}</h1>
                    <h3 className="text-gray-500">{info.nativeCountry}</h3>
                  </div>

                  <div className="px-6 border-r border-gray-300">
                    <h1 className="font-bold text-2xl">SBS{info.studentID}</h1>
                    <h3 className="text-gray-500">Student ID</h3>
                  </div>

                  <div className="px-6 border-r border-gray-300">
                    <h1 className="font-bold text-2xl">
                      {info.email}@sbsuni.edu.vn
                    </h1>
                    <h3 className="text-gray-500">Email</h3>
                  </div>

                  <div className="px-6">
                    <h1 className="font-bold text-2xl">{info.pathway}</h1>
                    <h3 className="text-gray-500">Pathway</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* General Info */}
          <div className="grid gap-6 sm:grid-cols-2 mb-5">
            {otherInfos.map((otherInfo, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-5"
              >
                <div className="bg-background rounded-full w-20 h-20 overflow-hidden flex items-center justify-center mb-4">
                  <img
                    src={otherInfo.icon}
                    alt={otherInfo.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold">{otherInfo.name}</h3>
                  <p
                    className={`${
                      otherInfo.data === 0
                        ? "text-red-500"
                        : otherInfo.data === 1
                        ? "text-green-500"
                        : "text-font text-2xl"
                    }`}
                  >
                    {otherInfo.data === 0
                      ? "Not yet"
                      : otherInfo.data === 1
                      ? "Completed"
                      : otherInfo.data}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* SubContainer */}
          {/* Class Timeline */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white p-5 col-span-2 row-span-2 rounded-md">
              <h1 className="uppercase text-gray-500 text-xl border-b border-font-light pb-5">
                Class Timeline
              </h1>
              <div className="">
                {classTimelines.map((timeline) => (
                  <div key={timeline.id} className="grid grid-cols-4 py-5 border-b border-border">
                    <div className="col-span-1">
                      <h1 className="text-font text-2xl">{timeline.day}</h1>
                      <p className="text-font-light">
                        {timeline.date.toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="col-span-3">
                      {timeline.subjects === null ? (
                        <h1 className="text-2xl text-font">
                          No classes - Enjoy your day off!
                        </h1>
                      ) : (
                        <div className="">
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

            <div className="bg-white p-5 col-span-1 rounded-md">
              <h1 className="uppercase text-gray-500 text-xl border-b border-font-light pb-5">
                Upcoming Deadlines
              </h1>
              <div>
                {upcomingDeadlines.map((el) => (
                  <div
                    key={el.id}
                    className="flex justify-between items-center border-b border-font-light py-3"
                  >
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
              <h1 className="uppercase text-gray-500 text-xl border-b border-font-light pb-5 mb-5">
                Announcement
              </h1>
              <div className="grid grid-cols-2 gap-3">
                {announcement.map((el) => (
                  <div key={el.id} className="bg-blue-100 rounded-md p-2">
                    <h3 className="text-font-light mb-2">
                      {el.deadline.toLocaleDateString("en-GB", {
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
