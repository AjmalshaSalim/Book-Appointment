import React from "react";

const Header = () => {
  return (
    <div className="Header bg-white text-black w-full flex drop-shadow-md z-200">
      <div className="HeaderLeftSide w-1/2">
        <div className="HeaderLogoContainer rounded-full text-white">
          <p className="HeaderProfile text-lg">MD</p>
        </div>
      </div>
      <div className="HeaderRightSide w-1/2 text-right">
        <div className="HeaderLinkText">Help ?</div>
      </div>
    </div>
  );
};

export default Header;
