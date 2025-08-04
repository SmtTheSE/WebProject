import React from "react";
import Container from "../Components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import DropDowns from "../Components/DropDown";

const Transcripts = () => {
  const records = [
    {
      semester: "Semester-1",
      courses: [
        {
          course: "CS-101",
          course_name: "Introduction to programming",
          grade: "A",
        },
        {
          course: "CS-102",
          course_name: "Computer Organization",
          grade: "B+",
        },
        {
          course: "Maths-101",
          course_name: "Discrete Mathematics",
          grade: "A-",
        },
      ],
    },
    {
      semester: "Semester-2",
      courses: [
        {
          course: "CS-201",
          course_name: "Data Structures",
          grade: "A",
        },
        {
          course: "CS-202",
          course_name: "Database Systems",
          grade: "B",
        },
        {
          course: "Maths-201",
          course_name: "Linear Algebra",
          grade: "A-",
        },
      ],
    },
  ];

  return (
    <section>
      <Container className="p-10 flex justify-between items-start gap-5">
        {/* Academic Records */}
        <div className="shadow-md p-5 rounded-md w-[70%] bg-white">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-font text-4xl font-bold">Academic Records</h1>
            {/* <button className="px-5 py-3 rounded-md border border-border shadow-xl flex items-center gap-2">
              Filter By
              <FontAwesomeIcon icon={faAngleDown} />
            </button> */}
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
                  <tr className="border-b border-border" key={`${record.semester}-${course.course}`}>
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
              <button className="bg-font text-background px-5 py-3 rounded-md">Request Now</button>
        </div>
      </Container>
    </section>
  );
};

export default Transcripts;
