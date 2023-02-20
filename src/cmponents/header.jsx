import React from "react";
import SocialMedia from "./social-media";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">Weather.info</div>
      <div className="social-media-coantainer">
        <SocialMedia  className="social-media"/>
      </div>
    </div>
  );
};

export default Header;
