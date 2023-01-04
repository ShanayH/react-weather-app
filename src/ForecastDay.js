import React from "react";

export default function ForecastDay(props) {
  function minTemp() {
    let temperature = Math.round(props.info.data.list[0].main.temp_min);
    return `${temperature}°`;
  }

  function maxTemp() {
    let temperature = Math.round(props.info.data.list[0].main.temp_max);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.info.data.list[0].dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="forecastDay">
      <div className="forecast-day">{day()}</div>
      <img
        src="http://openweathermap.org/img/wn/10d@2x.png"
        // src="http://openweathermap.org/img/wn/(${props.info.data.list[0].weather[0].icon})@2x.png"
        alt={props.info.data.list[0].weather[0].main}
        width={44}
      />
      <div className="forecast-temps">
        <span className="forecast-temp-min">{minTemp()}</span>
        <span className="forecast-temp-max">{maxTemp()}</span>
      </div>
    </div>
  );
}
