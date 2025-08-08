import React, { useState } from "react";
import Container from "../Components/Container";
import DropDowns from "../Components/DropDown";
import DualCircularProgress from "../Components/DualCircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import AttendanceCalendar from "../Components/AttendanceCalendar";

const Attendance = () => {
    
  const [attendanceLogs, setAttendanceLogs] = useState([
    {
      date: "2025-07-01",
      checkIn: "08:00",
      checkOut: "15:00",
      status: 1, // 1 = Present
      note: "On time",
    },
    {
      date: "2025-07-02",
      checkIn: "08:05",
      checkOut: "15:15",
      status: 1,
      note: "Stayed for project work",
    },
    {
      date: "2025-07-03",
      checkIn: null,
      checkOut: null,
      status: 0, // 0 = Absent
      note: "No prior notice",
    },
    {
      date: "2025-07-04",
      checkIn: null,
      checkOut: null,
      status: 2, // 2 = Absent with permission
      note: "Sick leave (medical certificate provided)",
    },
    {
      date: "2025-07-05",
      checkIn: "08:10",
      checkOut: "14:45",
      status: 1,
      note: "Left early for appointment",
    },
  ]);

  const [rates, setRates] = useState({
    studentRate: 84,
    teacherRate: 91,
  });

  return (
    <section className="p-10">
      <Container className="flex justify-between items-stretch gap-5">
        {/* Left Side */}
        <div className="w-2/3">
          {/* Explanation */}
          <div className="bg-white p-5 rounded-md mb-5">
            <h1 className="text-font text-3xl mb-5">Attendances</h1>
            <p className="mb-10 text-justify">
              Every class you attend adds value to your learning journey. Being
              present shows dedication and builds habits that lead to strong
              academic performance. Try your best to stay consistent - your
              future self will thank you!
            </p>
            <div className="flex justify-between items-center">
              <h3 className="flex items-center gap-2">
                <span className="bg-green-600 w-5 h-5 rounded-full inline-block"></span>{" "}
                Present Days
              </h3>
              <h3 className="flex items-center gap-2">
                <span className="bg-red-600 w-5 h-5 rounded-full inline-block"></span>{" "}
                Absent Days
              </h3>
              <h3 className="flex items-center gap-2">
                <span className="bg-yellow-400 w-5 h-5 rounded-full inline-block"></span>{" "}
                Absent with permission
              </h3>
            </div>
          </div>

          {/* Daily attendance */}
          <div className="bg-white p-5 rounded-md">
            <div className="flex justify-between items-center mb-5">
              <h1 className="text-font text-3xl">
                Daily Attendance Table (Detailed Log)
              </h1>
              <DropDowns />
            </div>

            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 text-left">Date</th>
                  <th className="py-3 text-left">Status</th>
                  <th className="py-3 text-left">Check-in</th>
                  <th className="py-3 text-left">Check-out</th>
                  <th className="py-3 text-left">Note</th>
                </tr>
              </thead>
              <tbody>
                {attendanceLogs.map((log) => (
                  <tr key={log.date} className="border-b border-border">
                    <td className="py-3">{log.date}</td>
                    <td className="py-3">
                      {log.status === 1
                        ? "Present"
                        : log.status === 0
                        ? "Absent"
                        : "Absent with permission"}
                    </td>
                    <td className="py-3">{log.checkIn}</td>
                    <td className="py-3">{log.checkOut}</td>
                    <td className="py-3">{log.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/3">
          {/* Chart */}
          <div className="bg-white p-5 rounded-md mb-5">
            <div className="flex justify-between items-center">
              <h1 className="text-font text-3xl mb-5">Attendances</h1>
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
            <DualCircularProgress
              studentRate={rates.studentRate}
              teacherRate={rates.teacherRate}
              className="my-5"
            />
            <div className="flex justify-between items-center">
              {/* Student Rate */}
              <div>
                <h5 className="font-light text-font-light text-center">
                  Students
                </h5>
                <h1 className="text-[#1E3A8A] text-2xl text-center">
                  {rates.studentRate}%
                </h1>
              </div>

              {/* Teacher Rate */}
              <div>
                <h5 className="font-light text-font-light text-center">
                  Teachers
                </h5>
                <h1 className="text-[#F59E0B] text-2xl text-center">
                  {rates.teacherRate}%
                </h1>
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div className="p-5 bg-white rounded-xl shadow-md w-full">
            <div className="flex justify-between items-center">
              <h1 className="text-font text-3xl mb-5">Calendar</h1>
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
            <AttendanceCalendar attendanceLogs={attendanceLogs} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Attendance;
