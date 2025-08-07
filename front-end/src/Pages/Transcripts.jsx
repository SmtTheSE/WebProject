// File: src/pages/Transcripts.jsx
import React, { useEffect, useState } from "react";
import Container from "../Components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import DropDowns from "../Components/DropDown";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Transcripts = () => {
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");

    axios.get("http://localhost:8080/api/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        const studentId = res.data.studentId;
        fetchTranscript(studentId, token);
      })
      .catch(() => navigate("/login"));
  }, []);

  const fetchTranscript = async (studentId, token) => {
    try {
      const headers = { Authorization: `Bearer ${token}` };

      const [coursesRes, resultsRes, gradesRes] = await Promise.all([
        axios.get(`http://localhost:8080/api/academic/study-plan-courses/student/${studentId}`, { headers }),
        axios.get(`http://localhost:8080/api/academic/course-results/student/${studentId}`, { headers }),
        axios.get("http://localhost:8080/api/academic/grades", { headers }),
      ]);

      const courseList = Array.isArray(coursesRes.data) ? coursesRes.data : [];
      const resultList = Array.isArray(resultsRes.data) ? resultsRes.data : [];
      const gradeList = Array.isArray(gradesRes.data) ? gradesRes.data : [];

      const courseGradeMap = {};
      resultList.forEach((result) => {
        courseGradeMap[result.studyPlanCourseId] = result.gradeName?.toUpperCase();
      });

      const gradeDescMap = {};
      gradeList.forEach((g) => {
        gradeDescMap[g.gradeName?.toUpperCase()] = g.description;
      });

      const grouped = {};
      courseList.forEach((course) => {
        const { semesterId, courseId, courseName, studyPlanCourseId } = course;
        const gradeName = courseGradeMap[studyPlanCourseId];
        const gradeLabel = gradeName ? `${gradeName} (${gradeDescMap[gradeName] || ""})` : "-";

        grouped[semesterId] = grouped[semesterId] || [];
        grouped[semesterId].push({
          course: courseId,
          course_name: courseName,
          grade: gradeLabel,
        });
      });

      const formatted = Object.entries(grouped).map(([semester, courses]) => ({
        semester,
        courses,
      }));

      setRecords(formatted);
    } catch (err) {
      console.error("Failed to fetch transcript:", err);
    }
  };

  return (
    <section>
      <Container className="p-10 flex justify-between items-start gap-5">
        {/* Academic Records */}
        <div className="shadow-md p-5 rounded-md w-[70%] bg-white">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-font text-4xl font-bold">Academic Records</h1>
            <DropDowns />
          </div>

          <table className="w-full text-left mb-5">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3">Semester</th>
                <th className="py-3">Course</th>
                <th className="py-3">Course Name</th>
                <th className="py-3">Grade</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) =>
                record.courses.map((course, index) => (
                  <tr
                    className="border-b border-border"
                    key={`${record.semester}-${course.course}`}
                  >
                    <td className="py-5">
                      {index === 0 ? record.semester : ""}
                    </td>
                    <td className="py-5">{course.course}</td>
                    <td className="py-5">{course.course_name}</td>
                    <td className="py-5">{course.grade}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <div className="flex gap-3 items-center">
            <button className="bg-iconic text-background py-3 px-8 rounded-md">
              Download Transcript
            </button>
            <button className="bg-[var(--light-gray--)] text-background py-3 px-8 rounded-md">
              Preview
            </button>
          </div>
        </div>

        {/* Request */}
        <div className="shadow-md rounded-md w-[30%] p-5 flex flex-col justify-between items-center h-50 bg-white">
          <h1 className="text-2xl text-font">Transcript Request</h1>
          <button className="bg-font text-background px-5 py-3 rounded-md">
            Request Now
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Transcripts;