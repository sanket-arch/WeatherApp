import React from "react";

const ExtraInfo = (props) => {
function timing(Time){
  var myDate=new Date(1000*Time);
  var hours=myDate.getHours();
 var minutes =myDate.getMinutes();
 
 return (hours+":"+minutes)
}
function KtoC(temp){
  return (Math.floor(temp-273.15))
}
  return (
    <div className="other-info">
      <ul>
        <li>
          <span>feels like</span>
          <p>
            {props.feels_like}
            <sup>℃</sup>
          </p>
        </li>
        <li>
          <span>max temp</span>
          <p>{KtoC(props.temp_max)}<sup>℃</sup></p>
        </li>
        <li>
          <span>min temp</span>
          <p>{KtoC(props.temp_min)}<sup>℃</sup></p>
        </li>
        <li>
          <span>sunrise</span>
          <p>{timing(props.sunrise)}AM</p>
        </li>
        <li>
          <span>sunset</span>
          <p>{timing(props.sunset)}PM</p>
        </li>
        <li>
          <span>humidity</span>
          <p>{props.humidity}%</p>
        </li>
        <li>
          <span>pressure</span>
          <p>{props.pressure}Hpa</p>
        </li>
      </ul>
    </div>
  );
};

export default ExtraInfo;
