import React from "react";

const SocialMedia = (props) => {
  return (
    <>
      <a
        href="https://www.linkedin.com/in/sanket-kumar-525652210/"
        target="_blank"
        rel="noopener noreferrer" 
        className={props.className}
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        href="mailto:rajkumarsanket4@gmail.com"
        target="_blank"
        rel="noopener noreferrer" 
        className={props.className}
      >
        <i className="fas fa-envelope"></i>
      </a>
      <a
        href="https://www.instagram.com/kumar_sanket_08/"
        target="_blank"
        rel="noopener noreferrer" 
        className={props.className}
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        href="https://github.com/sanket-arch"
        target="_blank"
        rel="noopener noreferrer" 
        className={props.className}
      >
        <i className="fab fa-github"></i>
      </a>
    </>
  );
};

export default SocialMedia;
