import React from "react";

const LoactionArea = (props) => {
  return (
    <div className="locationArea">
      <i className="fas fa-map-marker-alt"></i>
      <h1 className="location">{props.loaction}, {props.country}</h1>
    </div>
  );
};

export default LoactionArea;
