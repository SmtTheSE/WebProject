import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <div className="ml-[320px] w-[calc(100%-320px)] mt-[103px]">{children}</div>
    </>
  );
};

export default Container;
