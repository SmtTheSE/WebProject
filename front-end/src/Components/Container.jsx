import React from "react";

const Container = ({ children, className }) => {
  return (
    <>
      <div className={`ml-[320px] w-[calc(100%-320px)] mt-[103px] ${className}`}>{children}</div>
    </>
  );
};

export default Container;
