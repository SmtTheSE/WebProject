import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faCoins,
  faGraduationCap,
  faHome,
  faListCheck,
  faListOl,
  faPlaneDeparture,
  faRoute,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [sideBarMenus, setSideBarMenus] = useState([
    {
      id: 1,
      name: "Home",
      icon: faHome,
      link: "/",
      isCurrent: true,
      children: null,
    },
    {
      id: 2,
      name: "Academic",
      icon: faGraduationCap,
      link: "/academic",
      isCurrent: false,
      children: [
        {
          id: 1,
          name: "Study Plan",
          icon: faRoute,
          link: "study-plan",
          isCurrent: false,
        },
        {
          id: 2,
          name: "Transcripts",
          icon: faListOl,
          link: "transcripts",
          isCurrent: true,
        },
        {
          id: 3,
          name: "Attendances",
          icon: faListCheck,
          link: "",
          isCurrent: false,
        },
      ],
    },
    {
      id: 3,
      name: "Dashboard",
      icon: faUser,
      link: "/profile",
      isCurrent: false,
      children: null,
    },
  ]);

  const handleMenus = (id) => {
    setSideBarMenus((prevMenus) =>
      prevMenus.map((menu) =>
        menu.id === id
          ? { ...menu, isCurrent: true }
          : { ...menu, isCurrent: false }
      )
    );
  };

  const academicMenuHandler = (id) => {
    setSideBarMenus((prevMenus) =>
      prevMenus[1].children.map((menu) =>
        menu.id === id
          ? { ...menu, isCurrent: true }
          : { ...menu, isCurrent: false }
      )
    );
  };

  return (
    <nav className="fixed bg-iconic w-80 h-screen flex flex-col justify-start items-start gap-3 p-5">
      {sideBarMenus.map((menu) =>
        menu.children == null ? (
          <Link
            key={menu.id}
            to={menu.link}
            className={`text-2xl p-5 ${
              menu.isCurrent ? "bg-white text-iconic" : "text-white"
            } w-full rounded-md flex items-center`}
            onClick={() => handleMenus(menu.id)}
          >
            <FontAwesomeIcon icon={menu.icon} className="w-6 h-6 mr-3" />
            {menu.name}
          </Link>
        ) : (
          <div
            key={menu.id}
            className={`text-2xl p-5 w-full rounded-md flex flex-col cursor-pointer transition-all duration-200 ${
              menu.isCurrent
                ? "bg-white text-iconic"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => handleMenus(menu.id)}
          >
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={menu.icon} className="w-6 h-6" />
                <span>{menu.name}</span>
              </div>
              <FontAwesomeIcon
                icon={faAngleDown}
                className={`transform transition-transform duration-200 ${
                  menu.isCurrent ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            {/* Child Menu */}
            {menu.isCurrent && (
              <div className="mt-4 ml-8 flex flex-col gap-2 text-base text-gray-700">
                {menu.children.map((child) => (
                  <Link
                    key={child.id}
                    to={child.link}
                    className="hover:text-iconic transition-colors duration-200 text-xl py-5"
                    onClick={academicMenuHandler}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )
      )}
    </nav>
  );
};

export default SideBar;
