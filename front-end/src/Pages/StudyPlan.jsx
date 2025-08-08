import React, { useState } from "react";
import Container from "../Components/Container";

import gpa from "../assets/icons/academic-success.png";
import credit from "../assets/icons/score.png";
import semester from "../assets/icons/calendar.png";
import status from "../assets/icons/project.png";
import DropDowns from "../Components/DropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
  faClock,
  faHourglass,
} from "@fortawesome/free-regular-svg-icons";

const StudyPlan = () => {
  const [academicInfos, setAcademicInfo] = useState([
    {
      detail: "Last GPA",
      content: 5.7,
      icon: gpa,
    },
    {
      detail: "Credits",
      content: 75,
      icon: credit,
    },
    {
      detail: "Semester",
      content: 4,
      icon: semester,
    },
    {
      detail: "Status",
      content: 1,
      icon: status,
    },
  ]);
  const [subjPlans, setSubjPlans] = useState([
    // Completed (status: 1)
    {
      id: 1,
      subject: "Data Structures",
      lecturer: "John Doe",
      year: 1,
      sem: 1,
      status: 1,
    },
    {
      id: 2,
      subject: "Database Systems",
      lecturer: "Jane Smith",
      year: 1,
      sem: 1,
      status: 1,
    },
    {
      id: 3,
      subject: "Web Development",
      lecturer: "Alice Johnson",
      year: 1,
      sem: 1,
      status: 1,
    },
    {
      id: 4,
      subject: "Operating Systems",
      lecturer: "Mark Brown",
      year: 1,
      sem: 1,
      status: 1,
    },

    // On Process (status: 0)
    {
      id: 5,
      subject: "Computer Networks",
      lecturer: "Ethan White",
      year: 1,
      sem: 2,
      status: 0,
    },
    {
      id: 6,
      subject: "Software Engineering",
      lecturer: "Olivia Green",
      year: 1,
      sem: 2,
      status: 0,
    },
    {
      id: 7,
      subject: "Cybersecurity Fundamentals",
      lecturer: "Daniel Black",
      year: 1,
      sem: 2,
      status: 0,
    },
    {
      id: 8,
      subject: "Artificial Intelligence",
      lecturer: "Sophia Blue",
      year: 1,
      sem: 2,
      status: 0,
    },
  ]);

  return (
    <section className="p-10">
      <Container>
        <div className="flex justify-between items-center gap-5 mb-5">
          {academicInfos.map((info) => (
            <div
              key={info.detail}
              className="w-500 rounded-md  px-5 py-3 bg-white flex items-center gap-5"
            >
              <div className="relative w-20 h-20 bg-background overflow-hidden rounded-full">
                <img
                  src={info.icon}
                  alt={info.detail}
                  className="w-15 object-cover absolute top-[50%] left-[50%] -translate-[50%] "
                />
              </div>
              <div>
                <h5 className="font-light text-font-light">{info.detail}</h5>
                <h1
                  className={`text-2xl font-bold ${
                    info.detail === "Status" &&
                    (info.content === 1 ? "text-green-700" : "text-red-700")
                  }`}
                >
                  {info.detail === "Credits"
                    ? info.content + " / 100"
                    : info.detail === "Status"
                    ? info.content === 1
                      ? "Active"
                      : "Fail"
                    : info.content}
                </h1>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-start gap-5">
          {/* Study Plan Timeline/ Roadmap */}
          <div className="bg-white p-5 rounded-md w-2/3">
            <div className="flex items-center justify-between border-b border-border pb-5">
              <h1 className="text-2xl text-font-light uppercase">
                Study Plan Timeline/Roadmap
              </h1>
              <DropDowns />
            </div>

            <table className="w-full border-separate border-spacing-y-2">
              <tbody>
                {[
                  ...new Set(
                    subjPlans.map((p) => `Year ${p.year} - Sem ${p.sem}`)
                  ),
                ].map((group) => (
                  <React.Fragment key={group}>
                    {/* Group Header Row */}
                    <tr>
                      <td colSpan="2" className="bg-gray-200 font-bold p-2">
                        {group}
                      </td>
                    </tr>

                    {/* Subjects inside this group */}
                    {subjPlans
                      .filter(
                        (plan) =>
                          `Year ${plan.year} - Sem ${plan.sem}` === group
                      )
                      .map((plan) => (
                        <tr key={plan.id}>
                          <td className="w-1/4 text-sm text-gray-500">
                            {plan.status === 1
                              ? "Completed"
                              : plan.status === 0
                              ? "In Progress"
                              : "Coming"}
                          </td>
                          <td className="flex justify-between items-center border-l-5 border-border p-3 bg-blue-50">
                            <h1>
                              <span className="font-bold">{plan.subject}</span>{" "}
                              by {plan.lecturer}
                            </h1>
                            <span>
                              {plan.status === 1 ? (
                                <FontAwesomeIcon
                                  icon={faCircleCheck}
                                  className="text-green-600"
                                />
                              ) : plan.status === 0 ? (
                                <FontAwesomeIcon
                                  icon={faClock}
                                  className="text-blue-800"
                                />
                              ) : (
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  className="text-red-600"
                                />
                              )}
                            </span>
                          </td>
                        </tr>
                      ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Course History */}
          <div className="bg-white p-5 w-1/3 rounded-md">
            <h1 className="text-2xl text-font-light uppercase pb-5 border-b border-border mb-5">
              Course History
            </h1>
            <div>
              {subjPlans
                .filter((subj) => subj.status === 1)
                .map((subj) => (
                  <div key={subj.id} className="flex justify-between items-center bg-blue-50 border-l-5 border-border p-3 mb-3">
                    <h1>{subj.subject}</h1>
                    <p>
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-green-600 mr-2" 

                      />
                      Completed
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StudyPlan;
