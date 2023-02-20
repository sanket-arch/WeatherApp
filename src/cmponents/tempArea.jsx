import React from "react";

const TempArea = (props) => {
  const iconUrl = "http://openweathermap.org/img/wn/" + props.icon + "@2x.png";
  return (
   
      <div className="tempArea">
        <div className="left">
          <h3 className="temp">
            {Math.floor(props.temp - 273.15)}
            <sup>℃</sup>
          </h3>
          <h5 className="date">{new Date().toDateString()}</h5>
        </div>
        <div className="right">
          <div className="weather">
            <img src={iconUrl} alt="icon" className="icon" />
            <h5>{props.main}</h5>
          </div>
          <div className="wind-speed">
            <i className="fas fa-wind"></i>
            <h5>{props.windSpeed} m/s</h5>
          </div>
        </div>
      </div>
   
  );
};

export default TempArea;
