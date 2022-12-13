import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function showWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Wednesday 07:00",
      iconUrl:
        "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/sun-behind-small-cloud.png",
      temperature: response.data.main.temp,

      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <input
            type="search"
            placeholder="Enter a city..."
            autoComplete="off"
            autoFocus="on"
            className="search-bar"
          />
          <input type="submit" value="Search" classNamem="search-button" />
        </form>
        <div className="row">
          <div className="col-6">
            <h1 className="city-result text-capitalize">{props.defaultCity} </h1>
          </div>
          <div className="col-6 date-time">
            <ul>
              <li>{weatherData.date}</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <ul>
              <li>
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  width="70"
                />
                <span className="temp-result">
                  {Math.round(weatherData.temperature)}{" "}
                </span>

                <span className="units">
                  <a href="#" className="active">
                    °C {""}
                  </a>
                  <a href="#">°F</a>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-6 weather-info">
            <ul>
              <li>Precipitation: 12%</li>
              <li>Humidity {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `2f4a61b0876133218968273ba29696cf`;
    let units = `metric`;

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showWeather);
    return "Loading...";
  }
}
