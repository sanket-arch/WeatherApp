
import React from "react";
import SocialMedia from "./social-media";

const Footer = (props) => {
  return (
    <div className="footer-Container" id={props.id}>
      <SocialMedia className="footer" />
      <p>Made ❤ by SANKET</p>
    </div>
  );
};

export default Footer;
