import React from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
      console.log(response.data);
  }
  console.log(props.coords);

  let apiKey = "2f4a61b0876133218968273ba29696cf";
  let lat = props.coords.lat;
  let lon = props.coords.lon;
  let units = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="forecast">
      <div className="row">
        <div className="col-2">
          <div className="forecast-day">Thu</div>
          <img src={props.icon} alt={props.alt} width="40" />

          <div className="forecast-temps">
            <span className="forecast-temp-min">5°</span>
            <span className="forecast-temp-max">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
