import React from "react";
import sbsLogo from "../assets/images/sbs-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import defaultProfile from "../assets/profiles/profile.jpeg";

const Navigation = () => {
  return (
    <>
      <nav className="z-10 flex left-0 top-0 justify-between items-center px-10 py-3 bg-white fixed w-full">
        <img src={sbsLogo} alt="SBS Logo" />
        <div className="flex justify-betweens items-center gap-5">
          <FontAwesomeIcon icon={faEnvelope} className="text-4xl" />
          <FontAwesomeIcon icon={faBell} className="text-4xl" />
          <div className="flex justify-between items-center gap-3">
            <div className="w-12 h-12 overflow-hidden rounded-full">
              <img
                src={defaultProfile}
                alt="Profile pic"
                className="w-full h-full object-cover"
              />
            </div>
            <FontAwesomeIcon icon={faAngleDown} className="text-2xl" />
          </div>
        </div>
      </nav>
      <br /><br /><br /><br />
    </>
  );
};

export default Navigation;
