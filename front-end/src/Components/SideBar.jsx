import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCoins,
  faGraduationCap,
  faHome,
  faPlaneDeparture,
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
      link: "/profile",
      isCurrent: true,
    },
    {
      id: 2,
      name: "Academic",
      icon: faGraduationCap,
      link: "",
      isCurrent: false,
    },
    {
      id: 3,
      name: "Finance",
      icon: faCoins,
      link: "",
      isCurrent: false,
    },
    {
      id: 4,
      name: "Student Life",
      icon: faUserGraduate,
      link: "/student-life",
      isCurrent: false,
    },
    {
      id: 5,
      name: "Transfer",
      icon: faPlaneDeparture,
      link: "/transfer",
      isCurrent: false,
    },
    {
      id: 6,
      name: "Profile",
      icon: faUser,
      link: "/profile",
      isCurrent: false,
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

  return (
    <nav className="fixed bg-iconic w-80 h-screen flex flex-col justify-start items-start gap-3 p-5">
      {sideBarMenus.map((menu) => (
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
      ))}
    </nav>
  );
};

export default SideBar;
