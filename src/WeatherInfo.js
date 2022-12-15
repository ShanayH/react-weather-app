import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="Info">
      <h1> {props.data.city}</h1>
      <div className="row">
        <div className="col-6">
          <h1 className="city-result text-capitalize">{props.defaultCity} </h1>
        </div>
        <div className="col-6 date-time">
          <ul>
            <li>
              {" "}
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <ul>
            <li>
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                width="70"
              />
              <span className="temp-result">
                {Math.round(props.data.temperature)}{" "}
              </span>

              <span className="units">C F</span>
            </li>
          </ul>
        </div>
        <div className="col-6 weather-info">
          <ul>
            <li>Precipitation: 12%</li>
            <li>Humidity {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
