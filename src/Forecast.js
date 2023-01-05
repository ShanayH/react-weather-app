import React, { useState, useEffect } from "react";

import "./Forecast.css";
// import ForecastDate from "./ForecastDate";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function handleResponse(response) {
    // console.log(response.data.list[0]);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    // console.log(forecast[0].weather[0].icon);
    return (
      <div className="forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <ForecastDay info={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "2f4a61b0876133218968273ba29696cf";
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}

// https://api.openweathermap.org/data/2.5/forecast?lat=54.5&lon=5.9&appid=2f4a61b0876133218968273ba29696cf&units=metric
