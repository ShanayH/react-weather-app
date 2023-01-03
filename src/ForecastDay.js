import React from "react";

export default function ForecastDay(props) {
  return (
    <div className="forecastDay">
      <div className="forecast-day">{props.info.data.list[0].dt}</div>
      <img
        src="http://openweathermap.org/img/wn/10d@2x.png"
        // src="http://openweathermap.org/img/wn/(${props.info.data.list[0].weather[0].icon})@2x.png"
        alt={props.info.data.list[0].weather[0].main}
        width={44}
      />
      <div className="forecast-temps">
        <span className="forecast-temp-min">
          {props.info.data.list[2].main.temp_min}°
        </span>
        <span className="forecast-temp-max">
          {props.info.data.list[2].main.temp_max}°
        </span>
      </div>
    </div>
  );
}
