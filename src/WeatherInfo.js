import React from "react";
import FormattedDate from "./FormattedDate";
import TempConversion from "./TempConversion";
import Forecast from "./Forecast";

export default function WeatherInfo(props) {
  return (
    <div className="Info">
      <div className="row">
        <div className="col-6">
          <h1 className="city-result text-capitalize">{props.data.city} </h1>
        </div>
        <div className="col-6 date-time">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="weather-description text-capitalize">{props.data.description}</li>
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
              <TempConversion celsius={props.data.temperature} />
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
      <Forecast
        icon={props.data.iconUrl}
        alt={props.data.description}
        coords={props.data.coordinates}
      />
    </div>
  );
}
