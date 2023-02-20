import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "./cmponents/header";
import LoactionArea from "./cmponents/loactionArea";
import TempArea from "./cmponents/tempArea";
import ExtraInfo from "./cmponents/extraInfo";
import Footer from "./cmponents/footer";
const App = () => {
  const [zip, setZip] = useState("94040,us");
  const [isClicked, setisClicked] = useState(false);
  const [data, setData] = useState("");
  const [error, setError] = useState(null);
  const [isloaded, setisloaded] = useState(true);
  useEffect(() => {
    if (zip === "") {
      setisClicked("94040");
    }
    // 5484c03b19a2350b0156af89c809c3df
    const url =
      "https://api.openweathermap.org/data/2.5/weather?zip=" +
      zip +
      "&appid=ca48804782830ce10002e6ac3f0151cb";
    Axios.get(url)
      .then((res) => {
        if (!(res.statusText === "OK")) {
          throw Error("sorry..Somthing wrong happend.");
        }

        return res.data;
      })
      .then((data) => {
        setData(data);
        setisloaded(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setisloaded(false);
      });
  }, [zip]);

  function HandleChange(e) {
    setZip(e.target.value);
  }
  function HandleClick(e) {
    e.preventDefault();
    isClicked ? setisClicked(false) : setisClicked(true);
  }
  return (
    <div className="bodyPart">
      <Header />
      <div className="inputeArea">
        <input
          type="text"
          onChange={HandleChange}
          placeholder="zip/pin code,country(e.g 94040,us)"
          className="inputBox"
        />
        <button type="submit" onClick={HandleClick} className="searchButton">
          <i className="fas fa-search"></i>
        </button>
      </div>
      {!error && <div>{error}</div>}
      {isloaded && <div className="loading-message">wait...</div>}
      {data ? (
        <div>
          <LoactionArea loaction={data.name} country={data.sys.country} />
          <TempArea
            temp={data.main.temp}
            main={data.weather[0].main}
            icon={data.weather[0].icon}
            windSpeed={data.wind.speed}
          />
          <ExtraInfo
            feels_like={Math.floor(data.main.feels_like - 273.15)}
            temp_min={data.main.temp_min}
            temp_max={data.main.temp_max}
            sunrise={data.sys.sunrise}
            sunset={data.sys.sunset}
            humidity={data.main.humidity}
            pressure={data.main.pressure}
          />
          <Footer />
        </div>
      ) : (
        <Footer id="foot" />
      )}
    </div>
  );
};

export default App;
