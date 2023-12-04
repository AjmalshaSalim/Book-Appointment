import React from "react";

const Header = () => {
  return (
    <div className="header bg-white text-black w-full flex shadow-md">
      <div className="leftSide w-1/2">
      <div className="logoContainer rounded-full text-white">
        <p className="profile text-lg ">MD</p>
      </div>
      </div>
      <div className="rightSide w-1/2 text-right">
      <div className="linkText">
        Help ?
        </div>
        </div>
    </div>
  );
};

export default Header;
