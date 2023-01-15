import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function minTemp() {
    let temperature = Math.round(props.info.temp.min);
    return `${temperature}°`;
  }

  function maxTemp() {
    let temperature = Math.round(props.info.temp.max);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.info.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  // console.log(props.info.weather[0].icon);
  return (
    <div className="forecastDay">
      <div className="forecast-day">{day()}</div>
    
      <WeatherIcon icon={props.info.weather[0].icon} />

      <div className="forecast-temps">
        <span className="forecast-temp-min">{minTemp()}</span>
        <span className="forecast-temp-max">{maxTemp()}</span>
      </div>
    </div>
  );
}
